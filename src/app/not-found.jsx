"use client"
import {useRouter} from "next/navigation"
import { FileSearch } from "@phosphor-icons/react";
const NotFound = () => {
  const router = useRouter()
  const handleBack = e =>{
    e.preventDefault()
    router.back()
  }
  return (
    <div className="mx-auto py-28 flex items-center">
    <div className="w-full flex items-center flex-col">
      <FileSearch size={128} className="text-color-primary"/>
      <h2 className="text-center text-4xl font-bold text-color-primary mb-8">Not Found</h2>
      <button type="button" onClick={handleBack} className="underline text-lg text-color-primary hover:text-color-accent transition-all">Kembali</button>
    </div>
    </div>
    )
}

export default NotFound