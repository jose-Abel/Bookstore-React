import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = () => (dispatch) => axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZtfyD3dYJgRiEVKbxPqy/books').then(
  (books) => {
    const booksArr = Object.entries(books.data);

    const newBooksArr = [];

    for (let i = 0; i < booksArr.length; i += 1) {
      const newBook = {
        id: booksArr[i][0],
        title: booksArr[i][1][0].title,
        category: booksArr[i][1][0].category,
      };

      newBooksArr.push(newBook);
    }
    dispatch({ type: GET_BOOKS_SUCCESS, payload: newBooksArr });
  },
  (err) => dispatch({ type: GET_BOOKS_FAILURE, err }),
);

// axios({
//   method: 'post',
//   url: '/login',
//   data: {
//     firstName: 'Finn',
//     lastName: 'Williams'
//   }
// });

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state.filter((book) => book.id !== action.payload.id),
        action.payload,
      ];

    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.payload),
      ];
    case GET_BOOKS_SUCCESS:
      console.log(action.payload);
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
};
