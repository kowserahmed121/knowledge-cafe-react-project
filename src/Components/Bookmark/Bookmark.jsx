import Book from "../Book/Book";

const Bookmark = ({ bookmarks, readTime }) => {
  return (
    <div className="w-1/3 ">
        <h1 className="p-8 rounded-lg bg-purple-200 text-2xl mt-8 font-bold">read time: 
            {readTime}</h1>
      <h2 className="text-2xl font-bold my-4">bookmark item {bookmarks.length}</h2>
      <div>
        {bookmarks.map((book) => (
          <Book book={book} key={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
