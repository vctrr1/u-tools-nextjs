import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const NunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "U-Tools",
  description: "Created by VCTRR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NunitoSans.className}>{children}</body>
    </html>
  );
}
