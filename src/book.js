const Book = (props) => {
  const { title, author, img, id } = props;
  return (
    <article className="book">
      <span className="book-number">#{id}</span>
      <img src={img} alt="book"></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
