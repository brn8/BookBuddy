import { Authorization, userLogin } from "../API/Api";
import { useEffect, useState } from "react";

/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
const Account = ({ token, checkout }) => {
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    const user = async () => {
      if (token != undefined) {
        const userDetails = await Authorization(token);
        setUserDetail(userDetails);
      }
    };
    user();
  }, []);
  return (
    <>
      <h2>Account Detail</h2>
      <p>
        <strong>
          {userDetail.firstname} {userDetail.lastname}
        </strong>
      </p>
      <p>
        <strong>Email: </strong>
        {userDetail.email}
      </p>
      {/* {checkout ? <img src={checkout.coverimage} alt="book image" /> : ""} */}
    </>
  );
};

export default Account;
