import React, {FC} from "react";
import styles from './sidebar.module.scss';
import {MailCategoryProps} from "@/components/mailCategories/typings";
import {MailCategoryItem} from "@/components/mailCategories/mailCategoryItem";



interface SidebarProps {
    menuItems: MailCategoryProps[];
}

export const MailCategoriesList: FC<SidebarProps> = ({menuItems}) => {
    return <aside className={styles.sidebar}>
        <nav aria-label="MailBoxes">
            {menuItems.map(menuItem => (
                <MailCategoryItem key={menuItem.id} {...menuItem} />
            ))}
        </nav>
    </aside>
}
