import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsBlog from "../../components/blogDetails/DetailsBlog";
import FeaturedBlogs from "../../components/featuredBlogs/FeaturedBlogs";
import {blogs} from '../../data/blog';

const BlogDetails = () => {
  const {blogId} = useParams();
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    setSingleBlog(blogs.find(({id}) => id === parseInt(blogId)));
  },[blogId]);

  useEffect(() => {
    document.title = "Medico | Blog Details";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
      <DetailsBlog data={singleBlog} />
      <FeaturedBlogs/>
    </main>
  )
}

export default BlogDetails;