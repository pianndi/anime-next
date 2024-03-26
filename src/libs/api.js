export const getAnime = async (resource,query)=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
  const data = await res.json()
  return data
}

export const getNestedAnime = async (resource)=>{
  const res = await getAnime(resource)
  const data = res.data.flatMap(items=>items.entry)
  return data
}