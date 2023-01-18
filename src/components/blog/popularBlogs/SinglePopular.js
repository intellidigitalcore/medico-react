
const SinglePopular = ({data}) => {
  const {image, blogTitle, time, date} = data;
  return (
    <li className="flex items-center gap-2 lg:gap-4 xl:gap-6">
      {/* <!-- image --> */}
      <div className="flex-shrink-0 h-[86px] w-[86px] rounded-lg overflow-hidden">
        <img src={image} className="w-full h-full object-cover" alt="Blog"/>
      </div>

      {/* <!-- blog name --> */}
      <div>
        <a href="blog-details.html" className="inline-block mb-2 text-base font-medium text-primary-text hover:text-secondary">{blogTitle}</a>
        <ul className="flex items-center gap-4">
          <li><p className="text-xs text-primary-text/40">{time} to read</p></li>
          <li><p className="text-xs text-primary-text/40">{date} </p></li>
        </ul>
      </div>
    </li>
  )
}

export default SinglePopular;