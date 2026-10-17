import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Maksym Hrytsenko - portfolio",
    description: "",
    icons: [
        { rel: "icon", type: "image/svg", url: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
