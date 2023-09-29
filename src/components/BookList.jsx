import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const { bookItems } = useSelector((state) => state.books);

  return (
    <div>
      <BookForm />
      <div>
        <h2 className="text-2xl font-bold my-3">Book List</h2>
        {bookItems.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
