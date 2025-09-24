export interface Email {
    id: number,
    from: string,
    title: string,
    content?: string,
    status: string,
    error?: string
}