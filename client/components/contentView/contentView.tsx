import {FC} from "react";
import {Email} from "@/components/mailPreview/typings";
import styles from './contentView.module.scss';

interface ContentViewProps {
    email: Email;
}
export const ContentView: FC<ContentViewProps> = ({email}) => {
    return <div className={styles.contentView}>
        <pre className={styles.from}>from: {email.from}</pre>
        <h1 className={styles.title}>{email.title}</h1>
        <p>{email.content}</p>
    </div>
}