// app/layout.tsx
import type { Metadata } from "next";
import { Saira, Sofia_Sans } from "next/font/google";
import "./globals.css";

const saira = Saira({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

const sofiaSans = Sofia_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-sofia-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Compass by Celerey | Discover Your Career Path with Confidence",
  description:
    "Compass by Celerey helps you discover your strengths, align your goals, and navigate your career journey with expert precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // NOTE: using `.className` ensures Next's generated CSS is actually applied.
  return (
    <html lang="en">
      <body
        className={`${saira.className} ${sofiaSans.className} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
