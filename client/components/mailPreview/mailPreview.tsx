"use client"
import Link from "next/link";
import {FC} from "react";
import styles from './mailOverview.module.scss';
import {Email} from "@/components/mailPreview/typings";
import {usePathname} from "next/navigation";

export const MailPreview: FC<Email & {status: string}> = ({from, title, content, id, status}) => {
    const pathname = usePathname();
    return <Link className={`${styles.mailPreview} ${pathname.endsWith(`${id}`)? styles.active: ""}`} href={`/${status}/${id}`}>
        <div className={styles.avatar}/>
        <pre className={styles.sender}>{from}</pre>
        <h3 className={styles.title}>{title}</h3>
        <p>{content}</p>
    </Link>
}
