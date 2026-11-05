import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shubham Nayak · Backend Engineer",
  description:
    "Backend engineer in Bengaluru building event-driven systems with Java, Spring Boot and Kafka. Software Engineer II at UKG, previously JPMorgan Chase.",
  openGraph: {
    title: "Shubham Nayak · Backend Engineer",
    description: "I build backends that stay up at 3 AM.",
    images: ["/images/portrait.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030407",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=JetBrains+Mono:wght@400;500;700&family=Instrument+Serif:ital@1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
