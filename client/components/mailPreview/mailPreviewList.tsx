import styles from './mailOverview.module.scss';
import React, {FC} from "react";
import {Email} from "@/components/mailPreview/typings";
import {MailPreview} from "@/components/mailPreview/mailPreview";



interface mailOverviewProps {
    mails: Email[]
}

export const MailPreviewList: FC<mailOverviewProps> = ({mails}) =>  {
    return <aside className={styles.mailOverview}>
        <p className={styles.numOfMessages}>{`Messages in ${mails.length}`}</p>
        <nav aria-label={`EmailsPreview`}>
            {mails.map(mail => (
                <MailPreview key={mail.id}  {...mail} />
            ))}
        </nav>
    </aside>
}
