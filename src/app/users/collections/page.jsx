import Header from "@/components/Dashboard/Header"
import Image from "next/image"
import Link from "next/link"

const Collections = () => {
  return (
    <div className="p-4">
      <Header title="Collections" />
      <div className="grid gap-4 md:grid-cols-4 grid-cols-2">
        <Link href="" className="rounded border-2 border-color-accent text-color-primary">
          <Image className="w-full" src="" alt="" width={350} height={350} />
          <div className="bg-color-accent p-2">
            <h2 className="text-md font-bold">Judul Anjimeh</h2>
            <p>Deskripsi</p>
          </div>
        </Link>
        <Link href="" className="rounded border-2 border-color-accent text-color-primary">
          <Image className="w-full" src="" alt="" width={350} height={350} />
          <div className="bg-color-accent p-2">
            <h2 className="text-md font-bold">Judul Anjimeh</h2>
            <p>Deskripsi</p>
          </div>
        </Link>
        <Link href="" className="rounded border-2 border-color-accent text-color-primary">
          <Image className="w-full" src="" alt="" width={350} height={350} />
          <div className="bg-color-accent p-2">
            <h2 className="text-md font-bold">Judul Anjimeh</h2>
            <p>Deskripsi</p>
          </div>
        </Link>
        <Link href="" className="rounded border-2 border-color-accent text-color-primary">
          <Image className="w-full" src="" alt="" width={350} height={350} />
          <div className="bg-color-accent p-2">
            <h2 className="text-md font-bold">Judul Anjimeh</h2>
            <p>Deskripsi</p>
          </div>
        </Link>
      </div>
      
    </div>
  )
}

export default Collections