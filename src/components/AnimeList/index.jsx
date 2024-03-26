import Link from "next/link"
import Image from "next/image"

const AnimeList = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-4 m-auto">
      {data.data?.map(data => (
        <div key={data.mal_id} className="bg-color-secondary shadow-xl rounded overflow-hidden m-auto w-full text-color-primary hover:text-color-accent">
          <Link href={`/detail/${data.mal_id}`}>
            <Image src={data.images.webp.image_url} alt={data.title} width={200} height={256} className="w-full max-h-64 object-cover" />
            <h3 className="text-md font-bold p-2">{data.title}</h3>
          </Link>
        </div>
      ))
      }
    </div>
  )
}


export default AnimeList