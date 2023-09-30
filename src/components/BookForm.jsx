import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addBook, postBookApi } from '../redux/books/booksSlice';
import Button from './Button';

const BookForm = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [formData, setFormData] = useState({ title: '', author: '', category: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateFormData = (formData) => {
    const { title, author, category } = formData;
    return title !== '' && author !== '' && category !== '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { ...formData, item_id: uuid() };
    if (validateFormData(formData)) {
      dispatch(addBook(newBook));
      dispatch(postBookApi(newBook));
      setFormData((prevState) => ({
        ...prevState, title: '', author: '', category: '',
      }));
    } else {
      // setMessage('Please fill all the fields');
    }
  };

  const { title, author } = formData;

  return (
    <div className="font-montserrat border-t-2">
      <h2 className="font-bold text-xl text-[#888] my-[1.813rem]">Add New Book</h2>
      <div>
        <form onSubmit={handleSubmit} className="flex justify-between gap-10 text-base">
          <input
            type="text"
            name="title"
            required
            className="borber border-2 border-[#E8E8E8] bg-white rounded p-[0.813rem] flex-grow placeholder:text-[#c4c4c4] outline-none"
            placeholder="Book Title"
            value={title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            required
            className="borber border-2 border-[#E8E8E8] bg-white rounded p-[0.813rem] placeholder:text-[#c4c4c4] outline-none"
            placeholder="Book Author"
            value={author}
            onChange={handleChange}
          />
          <select
            name="category"
            defaultValue="Category"
            required
            className="borber border-2 border-[#E8E8E8] bg-white rounded p-[0.813rem] text-[#c4c4c4]"
            onChange={handleChange}
          >
            <option value="Category" disabled>Category</option>
            {categories.map((category) => (
              <option key={category} value={category} className="text-black">{category}</option>
            )) }
          </select>
          <Button type="submit">
            ADD BOOK
          </Button>
        </form>
        {/* <p className="text-red-500 text-sm">{message}</p> */}
      </div>
    </div>
  );
};

export default BookForm;
