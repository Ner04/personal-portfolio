// All the content on the site lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Shubham Nayak",
  tagline: "Software Engineer II @ UKG · ex-JPMorgan Chase",
  intro:
    "Java, Spring Boot & Kafka engineer in Bengaluru. I design event-driven systems and migrate them without downtime.",
  email: "shubhamnayak0904@gmail.com",
  location: "Bengaluru",
  links: {
    github: "https://github.com/Ner04",
    linkedin: "https://www.linkedin.com/in/shubhambackend/",
    medium: "https://medium.com/@shubhamnayak0904",
  },
  education: "B.Tech CSE · Centurion University · 9.17 CGPA",
};

// Rotates in the hero headline: "I build backends that …"
export const heroWords = [
  "stay up at 3 AM.",
  "reach 1M+ people.",
  "move $2.1B a month.",
  "survive chaos.",
];

export const stats = [
  { value: 4, prefix: "", suffix: "+ yrs", decimals: 0, label: "building production backends", tone: "cobalt" },
  { value: 1, prefix: "", suffix: "M+", decimals: 0, label: "employees reached by a feature I launched", tone: "plain" },
  { value: 2.1, prefix: "$", suffix: "B", decimals: 1, label: "monthly loan volume on my JPMC services", tone: "plain" },
  { value: 4, prefix: "", suffix: " × 0s", decimals: 0, label: "migrations led, zero downtime", tone: "lime" },
] as const;

export const skills = [
  "Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "MongoDB", "Kubernetes",
  "Helm", "Terraform", "GCP", "AWS", "OAuth 2.0", "OpenTelemetry", "Go",
];

export type Job = {
  badge: string;
  badgeTone: "cobalt" | "lime";
  org: string;
  role: string;
  summary: string;
  when: string;
  chips: string[];
  points: string[];
};

export const jobs: Job[] = [
  {
    badge: "UKG",
    badgeTone: "cobalt",
    org: "UKG",
    role: "Software Engineer II",
    summary: "notifications, security & platform",
    when: "Jun 2025 — now",
    chips: ["1M+ reach", "Vault → GSM", "OAuth 2.0"],
    points: [
      "Launched email/SMS broadcast in UKG Pro for 1M+ employees across 5 regions — wrote the HLD, shipped behind LaunchDarkly flags.",
      "Moved encryption keys from HashiCorp Vault to Google Secret Manager with dual writes, zero downtime.",
      "Swapped certificate auth for OAuth 2.0 on push and SMS endpoints; moved 10 services to Helm + GitHub Actions.",
    ],
  },
  {
    badge: "JPM",
    badgeTone: "lime",
    org: "Cognizant × JPMorgan Chase",
    role: "Software Engineer",
    summary: "loan origination platform",
    when: "Aug 2022 — May 2025",
    chips: ["$2.1B / mo", "12+ chaos fixes", "50+ incidents"],
    points: [
      "Built Spring Boot services for loan booking and disbursement across North America, Brazil, Argentina and Europe.",
      "Added RBAC with Spring Security for 4 roles across origination, approval and disbursement APIs.",
      "Ran Gremlin chaos experiments that caught 12+ resilience bugs before peak releases.",
    ],
  },
];

const MEDIUM = "https://medium.com/@shubhamnayak0904/";

export type Project = {
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  code: string;
  story?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Netflix-style Streaming",
    summary: "Upload a video, get 4 qualities streamed with adaptive bitrate.",
    image: "/images/projects/streaming.svg",
    imageAlt: "Play button with four video quality levels and a segment timeline",
    code: "https://github.com/Ner04/Netflix_Adaptive_Streaming",
    story: MEDIUM + "netflix-is-a-pizza-shop-that-never-makes-you-wait-so-i-built-one-in-java-68eafb67f417",
    stack: ["Java 21", "Temporal", "FFmpeg"],
  },
  {
    name: "Relay — Encrypted Chat",
    summary: "WhatsApp-style chat where the server only ever sees ciphertext.",
    image: "/images/projects/chat.svg",
    imageAlt: "Chat bubbles with read receipts next to a padlock",
    code: "https://github.com/Ner04/chat-system-",
    story: MEDIUM + "i-tried-to-rebuild-whatsapp-on-a-whiteboard-the-server-forgets-everything-on-purpose-830946c1d798",
    stack: ["Spring Boot", "WebSocket", "MongoDB"],
  },
  {
    name: "Wallet Service",
    summary: "P2P transfers where a retried payment applies exactly once.",
    image: "/images/projects/wallet.svg",
    imageAlt: "Two wallets with a retried transfer applied once",
    code: "https://github.com/Ner04/paytm-wallet-test",
    story: MEDIUM + "the-double-charge-bug-why-every-payment-api-needs-idempotency-cbec2ac1721d",
    stack: ["Java 21", "PostgreSQL", "Virtual threads"],
  },
  {
    name: "Webhook Delivery Platform",
    summary: "Multi-tenant webhooks: signed, rate-limited, retried, never lost.",
    image: "/images/projects/webhook.svg",
    imageAlt: "Event hub fanning out to tenants with a retry loop",
    code: "https://github.com/Ner04/Multi-Tenant-Webhook-Delivery-Platform",
    stack: ["Kafka", "Redis", "Outbox"],
  },
];

export type Post = {
  title: string;
  url: string;
  date: string; // ISO date
  tag: string;
  image: string;
};

// Used when the live Medium feed can't be reached, and to supply cover images.
export const fallbackPosts: Post[] = [
  { title: "The Double Charge Bug: Why Every Payment API Needs Idempotency", url: MEDIUM + "the-double-charge-bug-why-every-payment-api-needs-idempotency-cbec2ac1721d", date: "2026-11-01", tag: "Payments", image: "/images/posts/double-charge-bug.jpg" },
  { title: "Netflix Is a Pizza Shop That Never Makes You Wait (So I Built One in Java)", url: MEDIUM + "netflix-is-a-pizza-shop-that-never-makes-you-wait-so-i-built-one-in-java-68eafb67f417", date: "2026-10-29", tag: "Streaming", image: "/images/posts/netflix-pizza-shop.jpg" },
  { title: "I Built Zomato in 400 Lines of Java", url: MEDIUM + "i-built-zomato-in-400-lines-of-java-and-learned-why-your-biryani-never-gets-delivered-twice-447fbab9bfd7", date: "2026-10-28", tag: "Low-level design", image: "/images/posts/zomato-400-lines.jpg" },
  { title: "ACID vs BASE: The Interview Cheat Sheet You’ll Actually Remember", url: MEDIUM + "acid-vs-base-the-interview-cheat-sheet-youll-actually-remember-731bcb8cfb86", date: "2026-10-25", tag: "Databases", image: "/images/posts/acid-vs-base.jpg" },
  { title: "Designing a Booking System That Never Double-Books", url: MEDIUM + "designing-a-booking-system-that-never-double-books-e4bb8c9884f0", date: "2026-10-24", tag: "Locking", image: "/images/posts/booking-system.jpg" },
  { title: "I Tried to Rebuild WhatsApp on a Whiteboard. The Server Forgets Everything — On Purpose.", url: MEDIUM + "i-tried-to-rebuild-whatsapp-on-a-whiteboard-the-server-forgets-everything-on-purpose-830946c1d798", date: "2026-10-23", tag: "Messaging", image: "/images/posts/whatsapp-whiteboard.jpg" },
  { title: "Designing a URL Shortener: From Short Codes to Scale", url: MEDIUM + "designing-a-url-shortener-from-short-codes-to-scale-77e2cbc82905", date: "2026-09-28", tag: "Scale", image: "/images/posts/url-shortener.jpg" },
];

export const terminalCommands: Record<string, string[]> = {
  whoami: ["shubham nayak — software engineer II @ UKG", "backend · distributed systems · bengaluru"],
  "cat stack.txt": ["java 17 · go · spring boot · kafka · postgres", "redis · mongodb · k8s · helm · terraform · gcp · aws"],
  "oncall --status": ["pager: quiet ✓   platforms owned: 4", "coffee level: critical ⚠"],
  "sudo hire shubham": ["[sudo] permission granted ✓", "mail shubhamnayak0904@gmail.com"],
};
