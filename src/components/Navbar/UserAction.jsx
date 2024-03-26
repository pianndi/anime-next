import Link from "next/link"
import { getUserSession } from "@/libs/auth"
const UserAction = async () => {
  const user = await getUserSession()
  const userLabel = user ? "Sign Out" : "Sign In"
  const userHref = user ? "/api/auth/signout" : "/api/auth/signin"
  return (
    <div className="flex items-center items-end justify-between flex-row gap-4">
      {user&&<Link href="/users/dashboard">Dashboard</Link>}
      <Link href={userHref} className="bg-color-secondary text-color-primary py-1 px-2 rounded-md">{userLabel}</Link>
    </div>
  )
}
export default UserAction