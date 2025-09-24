import styles from "./layout.module.scss";
import {Metadata} from "next";
import {Toolbar} from "@/components/toolbar/toolbar";
import {Email} from "@/components/mailPreview/typings";
import { fetchAllEmails } from "@/app/lib/mail";

export async function generateMetadata(
    { params }: { params: Promise<{ mailbox: string, id: string }> }
): Promise<Metadata> {
    const { mailbox, id } = await params
    const title = mailbox.charAt(0).toUpperCase() + mailbox.slice(1);
    return { title: `${title} | Mail`, description: `Shows Email with the ID of ${id}` };
}

export default async function EmailLayout({ children, params }: {
    children: React.ReactNode;
    params: Promise<{ mailbox: string, id: string }>;
}) {
    const {mailbox, id} = await params
    const emailList: Email[] = await fetchAllEmails({mailbox, forceCache: true})
    const fallbackId: string = `${emailList[0].id}` === id? `${emailList[1].id}`: `${emailList[0].id}`
    return (
        <div className={styles.layout}>
            <Toolbar mailbox={mailbox} fallbackId={fallbackId} mailId={id} />
            {children}
        </div>
    );
}
