import styles from './page.module.scss';
import {Email} from "@/components/mailPreview/typings";
import {ContentView} from "@/components/contentView/contentView";
import {fetchAllEmails, fetchEmail} from "@/app/lib/mail";
import {redirect} from "next/navigation";

export default async function EmailPage({ params }: {params: Promise<{ mailbox: string, id: string }>}) {
    const {id, mailbox} = await params
    const email: Email = await fetchEmail(id)
    if(email?.error){
        const emailList: Email[] = await fetchAllEmails({mailbox, forceCache: true})
        redirect(`/${mailbox}/${emailList[0]?.id}`)
    }

    return <div className={styles.page}>
        <ContentView email={email} />
    </div>
}
