import { Email } from "@/components/mailPreview/typings";
import { fetchAllEmails } from "@/app/lib/mail";
import { redirect } from "next/navigation";

export default async function MailboxPage({params}: {params: Promise<{ mailbox: string }>}) {
    const {mailbox} = await params
    const emailList: Email[] = await fetchAllEmails({mailbox, forceCache: true})
    redirect(`/${mailbox}/${emailList[0]?.id}`)
}
