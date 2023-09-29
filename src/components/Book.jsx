import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { title, item_id: itemId } = book;
  return (

    <div className="border p-3 mb-2 flex gap-5">
      <p className="text-xl font-bold">{title}</p>
      <Button
        type="button"
        onClick={() => dispatch(removeBook(itemId))}
        buttonStyles="bg-red-500 text-white px-2 py-1 rounded"
      >
        REMOVE
      </Button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
