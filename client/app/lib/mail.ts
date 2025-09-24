import { Email } from "@/components/mailPreview/typings";

const API_BASE = process.env.API_BASE_URL || "";

export const fetchAllEmails = async (props: { mailbox?: string, forceCache?: boolean }) => {
  const statusString = props.mailbox?`?status=${props.mailbox}`: ''
  const emailListResponse = await fetch(`${API_BASE}/emails${statusString}`, {
    cache: props.forceCache? 'force-cache': 'no-store',
    next: { tags: ['emailList'] },
  })
  return await emailListResponse.json().catch(() => []) as Email[]
}

export const fetchEmail = async (id: string) => {
  const emailResponse = await fetch(`${API_BASE}/emails/${id}`, {
    headers: {
      contentType: "application/json",
    }
  })
  return await emailResponse.json().catch(()=> []) as Email
}
