import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MineSweeper",
  description: "Hack4Impact advanced workshop project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
