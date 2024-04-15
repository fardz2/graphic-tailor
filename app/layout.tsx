import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
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
