import type {Metadata} from "next";
import "./globals.css";
import {Footer, Navbar} from '@/widgets'
import {ReactNode} from "react";


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
        <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}