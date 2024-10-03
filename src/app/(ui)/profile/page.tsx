import { user } from "@/data/user";
import { redirect } from "next/navigation";

export default function Page(){
    return redirect('/'+user.slug)

    return null
}
