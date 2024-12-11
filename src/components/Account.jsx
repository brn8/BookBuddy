import {
  Authorization,
  deleteReservation,
  reservation,
  userLogin,
} from "../API/Api";
import { useEffect, useState } from "react";

/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
const Account = ({ token, checkout }) => {
  const [userDetail, setUserDetail] = useState({});
  const [reservedBook, setReservedBook] = useState([]);
  const [deleteObj, setDeleteObj] = useState({});
  const returnHandler = async (id) => {
    const returnBook = await deleteReservation(token, id);
    setDeleteObj(returnBook);
  };
  useEffect(() => {
    const user = async () => {
      if (token != undefined) {
        const userDetails = await Authorization(token);
        console.log(userDetail);
        setUserDetail(userDetails);
      }
      const myBook = await reservation(token);
      console.log(myBook);
      setReservedBook(myBook);
    };
    user();
  }, [deleteObj]);
  return (
    <>
      <h2>Account Detail</h2>
      <p style={{ fontSize: "20px" }}>
        <strong>Full Name: </strong>
        {userDetail.firstname} {userDetail.lastname}
      </p>
      <p style={{ fontSize: "20px" }}>
        <strong>Email: </strong>
        {userDetail.email}
      </p>
      {reservedBook != undefined && (
        <h1 style={{ textAlign: "center" }}>Checked Out Books</h1>
      )}
      <br />
      <div className="card-account">
        {reservedBook != undefined &&
          reservedBook.map((book) => {
            return (
              <>
                <div className="bookaccount">
                  <h3>{book.title}</h3>
                  <img
                    src={book.coverimage}
                    alt="book image"
                    style={{ width: "250px", height: "350px" }}
                  />
                  <button onClick={() => returnHandler(book.id)}>Return</button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Account;
