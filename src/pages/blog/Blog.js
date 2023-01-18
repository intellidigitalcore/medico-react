import { useEffect } from "react";
import AllBlogs from "../../components/blog/allBlogs/AllBlogs";
import PopularBlogs from "../../components/blog/popularBlogs/PopularBlogs";

const Blog = () => {
  useEffect(() => {
    document.title = "Medico | Blog";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
      <PopularBlogs/>
      <AllBlogs/>
    </main>
  )
}

export default Blog;