"use server"
import {Metadata} from "next";
import {MailPreviewList} from "@/components/mailPreview/mailPreviewList";
import {Email} from "@/components/mailPreview/typings";
import { fetchAllEmails } from "@/app/lib/mail";

export async function generateMetadata(
    { params }: { params: Promise<{ mailbox: string }> }
): Promise<Metadata> {
    const { mailbox } = await params
    const title = mailbox.charAt(0).toUpperCase() + mailbox.slice(1);
    return { title: `${title} | Mail`, description: `Shows Emails of ${title}`};
}

export default async function MailboxLayout({ children, params }: {
    children: React.ReactNode;
    params: Promise<{ mailbox: string }>;
}) {
    const {mailbox} = await params
    const emailList: Email[] = await fetchAllEmails({mailbox})
    return (
        <>
            <MailPreviewList mails={emailList}/>
            {children}
        </>
    );
}
