import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Books from "./components/Books";
import Navigation from "./components/Navigations";
import Account from "./components/Account";
import { useEffect } from "react";
import { getBooks } from "./API/Api";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import SingleBook from "./components/SingleBook";
function App() {
  const [token, setToken] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [dataReceived, setDataReceived] = useState(false);
  useEffect(() => {
    const allBooks = async () => {
      const books = await getBooks();
      setAllBooks(books);
      setDataReceived(true);
    };
    allBooks();
  }, []);

  return (
    <>
      <Navigation token={token} setToken={setToken} />

      <Routes>
        <Route
          path="/"
          element={<Books allBooks={allBooks} dataReceived={dataReceived} />}
        >
          Home
        </Route>
        <Route path="/login" element={<Login setToken={setToken} />}>
          Login
        </Route>
        <Route path="/account" element={<Account token={token} />}>
          Account
        </Route>
        <Route path="/register" element={<Register />}>
          Register
        </Route>
        <Route
          path="/singleBook/:id"
          element={<SingleBook allBooks={allBooks} token={token} />}
        >
          Single Book
        </Route>
      </Routes>
    </>
  );
}

export default App;
