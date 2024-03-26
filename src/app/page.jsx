import {getAnime,getNestedAnime} from "@/libs/api"
import Header from "@/components/AnimeList/Header"
import AnimeList from "@/components/AnimeList"

const Home = async () => {
  const [topAnime,recommendAnime] = await Promise.all([getAnime("top/anime","limit=8"),getNestedAnime("recommendations/anime")])
  const random = Math.floor(Math.random()*recommendAnime.length-4)
  const recommendAnimeSliced = {data:recommendAnime.slice(random,random+4)}
  return (
    <>
      <section className="mb-6">
        <Header title="Rekomendasi" />
        <AnimeList data={recommendAnimeSliced} />
      </section>
      <section className="mb-6">
        <Header title="Paling Populer" linkHref="/popular" linkTitle="Lihat Semua" />
        <AnimeList data={topAnime} />
      </section>
    </>
  )
}

export default Home