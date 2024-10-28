const Book = ({ book }) => {
  const { title } = book;
  return (
    <div className="bg-slate-200 p-6 mb-4 rounded-xl">
      <h2 className="text-xl">{title}</h2>
    </div>
  );
};

export default Book;
