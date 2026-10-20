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

// Vercel hosts the unfinished preview; keep it out of search results. The
// GitHub Pages build behind mahry.fyi doesn't set VERCEL, so it stays indexable.
const isPreviewHost = process.env.VERCEL === "1";

export const metadata: Metadata = {
    title: "Maksym Hrytsenko — portfolio",
    description: "",
    robots: isPreviewHost ? { index: false, follow: false } : undefined,
    icons: [
        { rel: "icon", type: "image/svg", url: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
    ],
};

// Follows the device's colour scheme, live. Runs in <head>, before first paint,
// so there is no flash of the wrong theme. The design system's dark tokens hang
// off [data-theme="dark"].
const themeScript = `(function(){var m=window.matchMedia("(prefers-color-scheme: dark)");var s=function(){document.documentElement.setAttribute("data-theme",m.matches?"dark":"light")};s();m.addEventListener("change",s)})();`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en-GB"
            data-scroll-behavior="smooth"
            className={`${geist.variable} ${geistMono.variable}`}
            suppressHydrationWarning
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
