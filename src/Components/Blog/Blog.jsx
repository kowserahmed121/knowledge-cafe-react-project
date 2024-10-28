import { CiBookmark } from "react-icons/ci";
import PropTypes from "prop-types";
import "./Blog.css";
const Blog = ({ blog, handleBookMark, handleReadTime}) => {
  const { cover_img, author, author_name, title, reading_time, hashtag, post_date } = blog;
  return (
    <div className="blog">
      <img className="cover-img" src={cover_img} alt="" />
      <div>
        <div className="flex items-center mt-4">
          <div className="flex">
            <img className="author-img mr-4" src={author} alt="" />
            <div>
                <h2 className="font-bold">{author_name}</h2>
                <p>{post_date}</p>
            </div>
          </div>
          <div className="flex items-center justify-center text-xl gap-2">
            <span>{reading_time} minute reading time</span>
            <button onClick={()=> handleBookMark(blog)}><CiBookmark></CiBookmark></button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-5">{title}</h2>
      <p className="mb-2">
        {
            hashtag.map((has, idx) => <span key={idx} className="hastag">{has}</span>)
        }
      </p>
      <button onClick={()=>handleReadTime(blog.reading_time)} className="text-purple-700 underline font-bold">set add time</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
