import {getServerSession} from "next-auth"
import {authOption} from "@/app/api/auth/[...nextauth]/route"
export const getUserSession = async ()=>{
  const data = await getServerSession(authOption)
  return data?.user
}