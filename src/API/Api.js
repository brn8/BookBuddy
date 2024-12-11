const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com";
export const addNewUserToDB = async (obj) => {
  try {
    const response = await fetch(`${API}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (obj) => {
  try {
    const response = await fetch(`${API}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const Authorization = async (token) => {
  try {
    const resonse = await fetch(`${API}/api/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await resonse.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getBooks = async () => {
  try {
    const response = await fetch(`${API}/api/books`);
    const result = await response.json();
    return result.books;
  } catch (error) {
    console.log(error);
  }
};

// export const addBooksToAccount = async (token, arr) => {
//   try {
//     const resonse = await fetch(`${API}/api/users/me`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
