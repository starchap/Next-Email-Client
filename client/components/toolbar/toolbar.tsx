"use client"
import styles from './toolbar.module.scss'
import {FC, useTransition} from "react";
import {deleteItem} from "@/app/actions/items";
import {redirect} from "next/navigation";
interface ToolbarProps {
    mailbox?: string
    fallbackId?: string
    mailId: string;
}

export const Toolbar: FC<ToolbarProps> = ({mailId,mailbox,fallbackId}) => {
    const [pending, startTransition] = useTransition()
    return <div className={styles.toolbar}>
        <button disabled={pending} aria-busy={pending} onClick={() => startTransition(async () => {
            await deleteItem(mailId);
            redirect(`/${mailbox}/${fallbackId}`)
        })} className={styles.delete}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title>
                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
            </svg>
        </button>
    </div>
}
