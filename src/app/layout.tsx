import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/widgets";

const alsRegular = localFont({
  src: "./fonts/ALS_Sector-Regular.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const alsBold = localFont({
  src: "./fonts/ALS_Sector-Bold.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Центр молодёжной робототехники",
  description: "ЦМР",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${alsRegular.variable} ${alsBold.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
