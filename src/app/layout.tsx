import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Footer, Navbar} from '@/widgets'
import {ReactNode} from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Центр молодёжной робототехники\n",
    description: "Центр располагается в одном из зданий нового кампуса Университета — в Инжиниринговом центре «Автоматика и робототехника» — приходите знакомиться. Мы уверены, что каждый из вас найдет здесь что-то интересное и полезное для себя.",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: ReactNode;
    }>) {
    return (
        <html lang="ru">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}