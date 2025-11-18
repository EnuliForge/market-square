// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Market Square | One space, many experiences.",
  description: "Browse every brand at Market Square in one sleek, mobile-first menu.",
  openGraph: {
    title: "Market Square | One space, many experiences.",
    description: "Tap a brand to see what's inside.",
    url: "https://market-square-ochre.vercel.app/", // replace with your real domain
    siteName: "Market Square",
    images: [
      {
        url: "https://market-square-ochre.vercel.app//market-square-og.png", // full URL is safest
        width: 1200,
        height: 630,
        alt: "Market Square — One space, many experiences.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Square | One space, many experiences.",
    description: "Tap a brand to see what's inside.",
    images: ["https://market-square-ochre.vercel.app//market-square-og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
