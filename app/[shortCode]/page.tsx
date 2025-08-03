import { getSingleUrl, updateVisits } from "@/server/urls"
import { redirect } from "next/navigation"

type RedirectPageProps = {
    params: Promise<{
        shortCode: string
    }>
}

export default async function RedirectPage({params}: RedirectPageProps) {
    const {shortCode} = await params

    const url = await getSingleUrl(shortCode)

    const {originalUrl} = url;


    if(originalUrl){
        await updateVisits(url)
        redirect(originalUrl)
    }

  
}
