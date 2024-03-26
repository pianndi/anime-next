"use client"
import {useRef} from "react"
import {useRouter} from "next/navigation"
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchInput = () => {
  const searchRef = useRef()
  const router = useRouter()
  const handleSearch = (event)=>{
    event.preventDefault()
    const keyword = searchRef.current.value
    if (!keyword||!keyword.trim(" ")) return
    router.push(`/search/${keyword}`)
  }
  return (
    <form className="relative" onSubmit={handleSearch}>
      <input className="w-full rounded-lg py-1 px-2" type="text" name="search" id="search" placeholder="Cari Anime..." ref={searchRef} onSubmit={handleSearch}/>
      <button className="absolute end-2 top-1" type="submit">
        <MagnifyingGlass size={24} />
      </button>
    </form>
  )
}
export default SearchInput