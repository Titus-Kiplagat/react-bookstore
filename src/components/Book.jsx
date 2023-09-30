import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookApi, removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const {
    title, author, category, item_id: itemId,
  } = book;

  return (
    <div className="font-robotoSlab flex justify-between my-2 pt-8 pr-36 pb-6 pl-6 border border-[#E8E8E8] rounded">
      <div>
        <p className="opacity-50 font-montserrat font-sm font-bold">{category}</p>
        <h2 className="capitalize text-[1.375rem] font-bold">{title}</h2>
        <p className="text-[#4386BF] text-sm mt-1">{author}</p>
        <div className="mt-[1.313rem] text-[#4386Bf] text-sm divide-x">
          <button className="pt-[0.188rem] pr-[0.938rem] pb-1" type="button">Comments</button>
          <button
            onClick={() => {
              dispatch(deleteBookApi(itemId));
              dispatch(removeBook(itemId));
            }}
            className="pt-[0.188rem] px-[0.938rem] pb-1"
            type="button"
          >
            Remove
          </button>
          <button className="pt-[0.188rem] pl-[0.938rem] pb-1" type="button">Edit</button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center mr-14">
          <svg className="rounded-full transform -rotate-90" width="100" height="100">
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E8E8E8" strokeWidth="7" />
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0391FF" strokeWidth="7" strokeDasharray="251.2" strokeDashoffset="62.8" />
          </svg>
          <div className="font-montserrat">
            <span className="text-[2rem]">75%</span>
            <p className="text-sm opacity-50">Completed</p>
          </div>
        </div>
        <div className="w-px h-20 bg-[#E8E8E8] mx-14" />
        <div>
          <p className="uppercase font-light text-sm opacity-50">Current chapter</p>
          <p className="text-base font-light tracking-[0.4px]">Chapter 1</p>
          <button type="button" className="bg-[#0290ff] pt-[0.438rem] pr-[1.188rem] pb-2 pl-[1.375rem] rounded-[3px] text-white font-light tracking-[0.5px] uppercase mt-[1.438rem]">update progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
