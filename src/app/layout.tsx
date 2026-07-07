import type { Metadata } from "next";
import {
    Cormorant_Garamond,
    Playfair_Display,
    Marck_Script,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const marck = Marck_Script({
    variable: "--font-marck",
    subsets: ["latin", "cyrillic"],
    weight: "400",
    display: "swap",
});

export const metadata: Metadata = {
    title: "В&А — 28.08.2026",
    description: "Приглашение на нашу свадьбу",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            className={`${cormorant.variable} ${playfair.variable} ${marck.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col font-cormorant">
                {children}
            </body>
        </html>
    );
}
