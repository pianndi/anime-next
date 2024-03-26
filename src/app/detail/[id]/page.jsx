import { getAnime } from "@/libs/api"
import Image from "next/image"
import Header from "@/components/Utilities/HeaderMenu"
import VideoPlayer from "@/components/Utilities/VideoPlayer"

const Detail = async ({ params: { id } }) => {
  const { data } = await getAnime(`anime/${id}`)
  return (
    <section className="my-2">
      <Header title={`${data.title}${(data.year && (" - " + data.year)||"")}`} />
      <div className="flex flex-row flex-nowrap overflow-x-auto px-4 gap-2 my-4 scrollbar-hide">
        <div className="flex flex-col border-4 border-color-primary text-color-primary py-2 rounded-lg items-center px-4">
          <h3 className="font-bold">Peringkat</h3>
          <p className="underline">{data.rank}</p>
        </div>
        <div className="flex flex-col flex-nowrap border-4 border-color-primary text-color-primary py-2 rounded-lg items-center px-4">
          <h3 className="font-bold">Episode</h3>
          <p className="underline">{data.episodes}</p>
        </div>
        <div className="flex flex-col flex-nowrap border-4 border-color-primary text-color-primary py-2 rounded-lg items-center px-4">
          <h3 className="font-bold">Score</h3>
          <p className="underline">{data.score}</p>
        </div>
        <div className="flex flex-col flex-nowrap border-4 border-color-primary text-color-primary py-2 rounded-lg items-center px-4">
          <h3 className="font-bold">Popularitas</h3>
          <p className="underline">{data.popularity}</p>
        </div>
        <div className="flex flex-col flex-nowrap border-4 border-color-primary text-color-primary py-2 rounded-lg items-center px-4">
          <h3 className="font-bold">Anggota</h3>
          <p className="underline">{data.members}</p>
        </div>
      </div>
      <div className="flex px-4 flex-col md:flex-row gap-4">
        <Image className="w-full object-cover max-h-96"src={data.images.webp.large_image_url} alt={data.title} width={400} height={400}/>
        <p className="text-color-primary text-md">{data.synopsis}</p>
      </div>
      <VideoPlayer youtubeId={data.trailer.youtube_id}/>
    </section>
  )
}
export default Detail