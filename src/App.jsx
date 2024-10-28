import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmark from "./Components/Bookmark/Bookmark";
import Component from "./Components/Component/Component";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0)
  const handleBookMark = (bookmark) => {
    const newBookMark = [...bookmarks, bookmark];
    setBookmarks(newBookMark);
  };

const handleReadTime = time =>{
  const setNewTime = readTime + time;
  setReadTime(setNewTime)
}

  console.log(bookmarks);
  return (
    <>
      <Component></Component>
      <div className="flex mx-auto w-11/12 gap-5">
        <Blogs handleReadTime={handleReadTime} handleBookMark={handleBookMark}></Blogs>
        <Bookmark readTime={readTime} bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  );
}

export default App;
