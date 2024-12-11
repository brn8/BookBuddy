import { useNavigate } from "react-router-dom";

/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
const Books = ({ allBooks }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ textAlign: "center" }}>All books</h1>
      <div className="card">
        {allBooks.map((book) => {
          return (
            <div className="book" key={book.id}>
              <h3>{book.title}</h3>
              <img
                src={book.coverimage}
                alt="book image"
                style={{ width: "150px", height: "300px" }}
              />
              <br />
              <button onClick={() => navigate(`/singleBook/${book.id}`)}>
                See Details
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
