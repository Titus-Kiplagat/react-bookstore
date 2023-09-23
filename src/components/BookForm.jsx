import { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onAddBook }) => {
  const [state, setState] = useState({
    title: '',
    message: '',
  });

  const { title, message } = state;

  const handleChange = (event) => {
    setState((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim()) {
      onAddBook(title);
      setState((prevState) => ({ ...prevState }));
    } else {
      setState((prevState) => ({ ...prevState, message: 'Please add todo item' }));
    }
  };
  return (
    <div className="mt-3">
      <h2 className="text-2xl font-bold mb-3">Add New Book</h2>
      <div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            name="book title"
            required
            className="bg-transparent border-2 rounded-full py-1 px-6 text-[16px] leading-[22.4px] font-light placeholder:text-gray-500 text-black"
            placeholder="Book Title"
            value={title}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="max-w-[200px] h-auto rounded-full bg-indigo-500 text-white py-1 px-6 border border-indigo-500 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            <span className="font-semibold">ADD BOOK</span>
          </button>
        </form>
        <p className="text-red-500 text-sm">{message}</p>
      </div>
    </div>
  );
};

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
