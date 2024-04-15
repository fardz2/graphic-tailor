import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "Graphic Tailor",
  applicationName: "Graphic Tailor",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Graphic Tailor",
    "Graphic tailor",
    "graphic tailor",
    "umkm",
    "bandung",
    "umkm jasa jahit",
    "umkm jasa jahit di bandung",
  ],
  authors: [
    { name: "Muhammad Faridz" },
    { name: "Muhammad Faridz", url: "fardz2.vercel.app" },
  ],
  creator: "Muhammad Faridz",
  publisher: "Muhammad Faridz",
  title: "Graphic Tailor",
  description:
    "Graphic tailor merupakan sebuah umkm yang bergerak pada bidang jasa perjahitan didaerah bandung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
