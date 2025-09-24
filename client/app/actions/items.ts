"use server"

import { revalidateTag} from "next/cache";

export async function deleteItem(id: string) {
    if(!id) {
        throw new Error("DeleteItem is Missing ID")
    }
    const res = await fetch(`${process.env.API_BASE_URL}/emails/${id}`, {
        method: 'DELETE'
    });
    if (res.status.toString() !== '204') {
        throw new Error(`DeleteItem failed with status ${res.status}`);
    }
    revalidateTag('emailList');
}