import { useNavigate, useParams } from "react-router-dom";
import { addBooksToAccount } from "../API/Api";

/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
const SingleBook = ({ allBooks, token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(allBooks);
  const handleCheckout = async () => {
    navigate("/account");
    const changeBookAvailability = await addBooksToAccount(token, parseInt(id));
  };
  return (
    <>
      {allBooks
        .filter((books) => books.id === parseInt(id))
        .map((book) => {
          return (
            <div className="singleBook">
              <h3 style={{ marginTop: "5px" }}>
                <strong>{book.title}</strong>
              </h3>
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
                <button onClick={handleCheckout}>Check out</button>
              ) : (
                <p style={{ color: "red" }}>
                  Please <strong>Login</strong> or <strong>Register</strong> in
                  order to checkout books
                </p>
              )}
              {/* {token ? (
                <>
                  <button onClick={handleCheckout} disabled={!book.available}>
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
              )} */}
            </div>
          );
        })}
    </>
  );
};

export default SingleBook;
