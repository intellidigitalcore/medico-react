import { Link } from "react-router-dom";

const SinglePopular = ({data}) => {
  const {id, previewImage, blogTitle, time, date} = data;
  return (
    <li className="flex items-center gap-2 lg:gap-4 xl:gap-6">
      {/* <!-- image --> */}
      <div className="flex-shrink-0 h-[86px] w-[86px] rounded-lg overflow-hidden">
        <img src={previewImage} className="w-full h-full object-cover" alt="Blog"/>
      </div>

      {/* <!-- blog name --> */}
      <div>
        <Link to={`/blog/${id}`} className="line-clamp inline-block mb-2 text-base font-medium text-primary-text hover:text-secondary">{blogTitle}</Link>
        <ul className="flex items-center gap-4">
          <li><p className="text-xs text-primary-text/40">{time} to read</p></li>
          <li><p className="text-xs text-primary-text/40">{date} </p></li>
        </ul>
      </div>
    </li>
  )
}

export default SinglePopular;