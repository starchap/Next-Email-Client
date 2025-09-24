"use client"
import Link from "next/link";
import {FC} from "react";
import {usePathname} from "next/navigation";
import styles from './sidebar.module.scss'
import {MailCategoryProps} from "@/components/mailCategories/typings";


export const MailCategoryItem: FC<MailCategoryProps> = ({href, label}) => {
    const pathname = usePathname();
    return <Link
        className={href !== '/' && pathname.startsWith(href) ? styles.active: ""}
        aria-current={pathname === href ? "page" : undefined}
        href={href}
    >
        {label}
    </Link>
}