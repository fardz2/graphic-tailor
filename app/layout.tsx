import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/image/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/image/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/image/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/image/site.webmanifest"></link>
      </head>
      <body className={`${poppins.className}  `}>
        <div className="overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
