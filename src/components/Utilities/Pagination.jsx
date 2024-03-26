const Pagination = ({ page, total, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }
  const handlePage = pg => {
    setPage(prevPg => prevPg + pg)
    scrollTop()
  }
  return (
    <div className="flex items-center my-6">
      <div className="rounded-lg flex flex-row gap-4 bg-color-secondary text-color-primary mx-auto px-4 py-2">
        {page > 1 && <button onClick={() => handlePage(-1)} className="hover:text-color-primary transition-all" type="button">Prev</button>}
        <p>{page} of {total}</p>
        {page < total && <button onClick={() => handlePage(1)} className="hover:text-color-primary transition-all" type="button">Next</button>}
      </div>
    </div>
  )
}

export default Pagination