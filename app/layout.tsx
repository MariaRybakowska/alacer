import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alacer",
  description: "Panele scienne i sufitowe",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
