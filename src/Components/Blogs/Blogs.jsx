import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookMark, handleReadTime}) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div className="w-2/3">
      {blog.map((blog) => (
        <Blog blog={blog} key={blog.id} handleReadTime={handleReadTime} handleBookMark={handleBookMark}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
