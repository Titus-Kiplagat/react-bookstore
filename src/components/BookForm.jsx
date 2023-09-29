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
    <div className="mt-3">
      <h2 className="text-2xl font-bold mb-3">Add New Book</h2>
      <div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            name="title"
            required
            className="bg-transparent border-2 rounded-full py-1 px-6 text-[16px] leading-[22.4px] font-light placeholder:text-gray-500 text-black"
            placeholder="Book Title"
            value={title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            required
            className="bg-transparent border-2 rounded-full py-1 px-6 text-[16px] leading-[22.4px] font-light placeholder:text-gray-500 text-black"
            placeholder="Book Author"
            value={author}
            onChange={handleChange}
          />
          <select
            name="category"
            defaultValue="Category"
            required
            className="bg-transparent border-2 rounded-full py-1 px-6 text-[16px] leading-[22.4px] font-light placeholder:text-gray-500 text-black"
            onChange={handleChange}
          >
            <option value="Category" disabled>Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
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
