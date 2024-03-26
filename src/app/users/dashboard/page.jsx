import {getUserSession} from "@/libs/auth"
import Image from "next/image"
import Link from "next/link"

const Dashboard = async ()=>{
  const user = await getUserSession()
  return (
    <div className="flex p-4 items-center flex-col">
      <Image className="mx-auto"src={user.image} alt={user.email} width={180} height={180}/>
      <h2 className="text-2xl font-bold text-color-primary text-center">{user.name}</h2>
      <div className="flex flex-row gap-4 justify-around items-center flex-wrap mt-6">
        <Link href="/users/collections" className="font-bold bg-color-accent text-color-primary px-6 py-4 rounded shadow">My Collection</Link>
        <Link href="/users/comments" className="font-bold bg-color-accent text-color-primary px-6 py-4 rounded shadow">My Comment</Link>
      </div>
    </div>
    )
}
export default Dashboard