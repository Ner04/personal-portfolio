# Shubham Nayak — Portfolio

Personal portfolio built with **Next.js 15 + TypeScript**. Midnight palette:
`#030407` background, `#1558C9` electric cobalt, `#D4FF24` acid lime.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

Almost everything lives in **`lib/data.ts`**: intro text, stats, jobs, projects,
terminal commands and the saved list of Medium articles. Change it there and the
page updates.

| What | Where |
| --- | --- |
| Text, jobs, projects, links | `lib/data.ts` |
| Colors and layout | `app/globals.css` (palette at the top) |
| Page structure | `app/page.tsx` |
| Images | `public/images/` |

## Medium articles update themselves

`lib/medium.ts` reads your Medium RSS feed (`medium.com/feed/@shubhamnayak0904`)
on the server and refreshes at most every 6 hours. A new article shows up on the
site without a redeploy. If Medium can't be reached, the saved list in
`lib/data.ts` is shown instead. Articles in that saved list use the local cover
images in `public/images/posts/`; new ones use the image from the article.

## Put it online (free, on Vercel)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **Add New → Project** → import the repo → **Deploy**.
3. Optional: in Vercel → Settings → Domains, add your own domain.

To deploy anywhere else: `npm run build` then `npm start` (Node 18.18+).

## Project layout

```
app/          layout, page, global styles, favicon
components/   one file per section (Experience, Projects, Writing, Contact, Terminal…)
lib/          data.ts (content) and medium.ts (live Medium feed)
public/images portrait watermark, avatar, project covers, article covers
```
