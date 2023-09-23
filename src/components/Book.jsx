import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => (
  <div className="border p-3 mb-2 flex gap-5">
    <p className="text-xl font-bold">{book.title}</p>
    <button
      type="button"
      onClick={() => onDelete(book.id)}
      className="bg-red-500 text-white px-2 py-1 rounded"
    >
      Delete
    </button>
  </div>
);

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
