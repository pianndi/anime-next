import Link from "next/link"
import SearchInput from "./SearchInput"
import UserAction from "./UserAction"
export default function Navbar() {
  return (
    <header className="flex justify-between content-center flex-col md:flex-row gap-2 bg-color-accent px-4 py-3">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-color-dark"><Link href="/">PiAnimeList</Link></h1>
      </div>
      <SearchInput/>
      <UserAction/>
    </header>
    )
} 