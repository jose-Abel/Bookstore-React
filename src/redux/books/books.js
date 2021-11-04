import axios from 'axios';

const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'bookStore/books/GET_BOOKS_FAILURE';
const ADD_BOOK_SUCCESS = 'bookStore/books/ADD_BOOK_SUCCESS';
const ADD_BOOK_FAILURE = 'bookStore/books/ADD_BOOK_FAILURE';
const REMOVE_BOOK_SUCCESS = 'bookStore/books/REMOVE_BOOK_SUCCESS';
const REMOVE_BOOK_FAILURE = 'bookStore/books/REMOVE_BOOK_FAILURE';

const initialState = [];

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

export const addBook = (book) => (dispatch) => axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZtfyD3dYJgRiEVKbxPqy/books', {
  item_id: book.id,
  title: book.title,
  category: book.category,
}).then(
  () => {
    dispatch({ type: ADD_BOOK_SUCCESS, payload: book });
  },
  (err) => dispatch({ type: ADD_BOOK_FAILURE, err }),
);

export const removeBook = (id) => (dispatch) => axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZtfyD3dYJgRiEVKbxPqy/books/${id}`).then(
  () => {
    dispatch({ type: REMOVE_BOOK_SUCCESS, payload: id });
  },
  (err) => dispatch({ type: REMOVE_BOOK_FAILURE, err }),
);

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return [
        ...action.payload,
      ];

    case ADD_BOOK_SUCCESS:
      return [
        ...state.filter((book) => book.id !== action.payload.id),
        action.payload,
      ];

    case REMOVE_BOOK_SUCCESS:
      return [
        ...state.filter((book) => book.id !== action.payload),
      ];

    default:
      return state;
  }
};
