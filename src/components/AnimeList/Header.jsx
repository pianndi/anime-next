import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h2 className="text-color-primary text-xl font-bold">{title}</h2>
      {
        (linkHref && linkTitle) &&
        <Link href={linkHref} className="text-color-primary text-md underline hover:text-color-accent transition-all">
          {linkTitle}
        </Link>
      }
    </div>
  )
}

export default Header