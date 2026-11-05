import { fallbackPosts, type Post } from "./data";

const FEED_URL = "https://medium.com/feed/@shubhamnayak0904";

function pick(block: string, tag: string): string {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!m) return "";
  return m[1].replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'");
}

function titleCase(s: string): string {
  return s.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Reads the latest posts from Medium's RSS feed.
 * Runs on the server and is re-checked at most every 6 hours, so new
 * articles appear on the site automatically. Falls back to the saved list
 * if Medium can't be reached.
 */
export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 60 * 60 * 6 } });
    if (!res.ok) throw new Error(`Medium feed returned ${res.status}`);
    const xml = await res.text();
    const items = xml.split("<item>").slice(1);
    const posts = items.map((raw): Post => {
      const block = raw.split("</item>")[0];
      const url = pick(block, "link").split("?")[0];
      const known = fallbackPosts.find((p) => p.url === url);
      const content = pick(block, "content:encoded");
      const feedImage = content.match(/<img[^>]+src="([^"]+)"/)?.[1];
      const category = pick(block, "category");
      return {
        title: decode(pick(block, "title")),
        url,
        date: new Date(pick(block, "pubDate")).toISOString().slice(0, 10),
        tag: known?.tag ?? (category ? titleCase(category) : "Article"),
        image: known?.image ?? feedImage ?? "/images/portrait.jpg",
      };
    });
    return posts.length ? posts : fallbackPosts;
  } catch {
    return fallbackPosts;
  }
}
