/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import BookForm from './BookForm';
import { getBooksApi } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const { bookItems } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooksApi());
  }, [dispatch]);

  if (bookItems.length === 0) {
    return (
      <div>
        <BookForm />
        <div>
          <h2 className="text-2xl font-bold my-3">Book List</h2>
          <p className="text-xl font-bold">No Books Available</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BookForm />
      <div>
        <h2 className="text-2xl font-bold my-3">Book List</h2>
        {bookItems && bookItems.map((book) => <Book key={book.item_id} book={book} />)}
      </div>
    </div>
  );
};

export default BookList;
