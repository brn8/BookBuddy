import { useNavigate, useParams } from "react-router-dom";

/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
const SingleBook = ({ allBooks, token, setCheckout }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(allBooks);
  return (
    <>
      {allBooks
        .filter((books) => books.id === parseInt(id))
        .map((book) => {
          return (
            <div className="singleBook">
              <h3>{book.title}</h3>
              <p>By: {book.author}</p>
              <p>
                <strong>Description: </strong>
                {book.description}
              </p>
              <img
                src={book.coverimage}
                alt="book image"
                style={{ width: "350px", height: "400px" }}
              />
              {token ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/account");
                      setCheckout(book);
                    }}
                    disabled={!book.available}
                  >
                    Check out
                  </button>
                  {book.available ? (
                    ""
                  ) : (
                    <p style={{ color: "red" }}>
                      This particular book is not available{" "}
                    </p>
                  )}
                </>
              ) : (
                <p style={{ color: "red" }}>
                  Please <strong>Login</strong> or <strong>Register</strong> in
                  order to checkout books
                </p>
              )}
            </div>
          );
        })}
    </>
  );
};

export default SingleBook;
