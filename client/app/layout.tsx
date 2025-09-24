"use server"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {MailCategoriesList} from "@/components/mailCategories/mailCategoriesList";
import {MailCategoryProps} from "@/components/mailCategories/typings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NavigationItems: MailCategoryProps[] = [
  { href: "/active", label: "Inbox", id: "inbox" },
  { href: "/sent/", label: "Sent", id: "sent" },
  { href: "/draft", label: "Draft", id: "draft" },
];

export default async function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MailCategoriesList menuItems={NavigationItems}/>
        {children}
      </body>
    </html>
  );
}
