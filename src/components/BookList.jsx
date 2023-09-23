import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
  ]);

  const handleAddBook = (bookTitle) => {
    const newBook = {
      id: uuidv4(),
      title: bookTitle,
    };
    setBooks([...books, newBook]);
  };

  const handleDelete = (id) => {
    setBooks([...books.filter((book) => book.id !== id)]);
  };

  return (
    <div>
      <BookForm onAddBook={handleAddBook} />
      <div>
        <h2 className="text-2xl font-bold my-3">Book List</h2>
        {books.map((book) => (
          <Book key={book.id} book={book} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
