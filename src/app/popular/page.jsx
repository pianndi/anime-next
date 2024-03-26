"use client"
import { useState, useEffect } from "react"
import Loading from "@/app/loading"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import {getAnime} from "@/libs/api"
const Popular = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState({})
  const fetchAnime = async () => {
    const data = await getAnime("top/anime",`page=${page}`)
    setTopAnime(data)
  }
  useEffect(() => {
    fetchAnime()
  }, [page])
  return (
    <section className="mb-6">
      <HeaderMenu title={"Anime Terpopuler #" + page} />
      {topAnime?
        <><AnimeList data={topAnime} />
          <Pagination page={page} total={topAnime.pagination?.last_visible_page} setPage={setPage} />
        </> : <Loading />}
    </section>
  )
}

export default Popular