
import Header from "@/components/AnimeList/Header"
import AnimeList from "@/components/AnimeList"

const Search = async ({params}) => {
  const {keyword} = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await res.json()

  const decodedKeyword = decodeURI(keyword)
  return (
    <>
      <section className="mb-4">
        <Header title={`Pencarian untuk ${decodedKeyword}..`} />
        <AnimeList data={searchAnime} />
      </section>
    </>
  )
}

export default Search