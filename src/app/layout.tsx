// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://market-square-upd6.vercel.app"),
  title: "Market Square | One space, many experiences.",
  description:
    "Browse every brand at Market Square in one sleek, mobile-first menu.",
  openGraph: {
    title: "Market Square | One space, many experiences.",
    description: "Tap a brand to see what's inside.",
    url: "https://market-square-upd6.vercel.app",
    siteName: "Market Square",
    type: "website",
    images: [
      {
        // relative path; Next will turn this into a full URL using metadataBase
        url: "/market-square-og.png",
        width: 1200,
        height: 630,
        alt: "Market Square — One space, many experiences.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Square | One space, many experiences.",
    description: "Tap a brand to see what's inside.",
    images: ["/market-square-og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
