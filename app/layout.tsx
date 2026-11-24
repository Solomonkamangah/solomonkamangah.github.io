import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solomon Kamanga | ICT & Business Systems",
  description:
    "Professional portfolio of Solomon Kamanga — ICT, business systems, software development and infrastructure."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
