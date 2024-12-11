import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
const Books = ({ allBooks }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className="book-container">
      {/* <h1
        style={{
          textAlign: "center",
        }}
      >
        Books
      </h1> */}
      <input
        class="form-control mr-sm-2"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search for books"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10px",
          width: "300px",
          borderRadius: "10px",
        }}
      />
      {allBooks.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      ).length > 0 ? (
        <div className="book-card">
          {allBooks
            .filter((book) =>
              book.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((book) => {
              return (
                <div className="book" key={book.id}>
                  <h4>{book.title}</h4>
                  <img
                    src={book.coverimage}
                    alt="book image"
                    style={{ width: "250px", height: "350px" }}
                  />
                  <button onClick={() => navigate(`/singleBook/${book.id}`)}>
                    See Details
                  </button>
                </div>
              );
            })}
        </div>
      ) : (
        <p
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "50px",
            marginTop: "10px",
          }}
        >
          No books found
        </p>
      )}
    </div>
  );
};

export default Books;
