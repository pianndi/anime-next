"use client"
import {useRouter} from "next/navigation"

const Header = ({title})=>{
  const router = useRouter()
  const handleBack = e =>{
    e.preventDefault()
    router.back()
  }
  return (
      <div className="flex py-4 flex-row justify-between items-center font-bold text-2xl text-color-primary">
        <button type="button" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary" onClick={handleBack}>&larr;</button>
        <h2>{title}</h2>
      </div>
    )
}
export default Header