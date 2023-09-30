import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="w-full bg-white py-4 sticky top-0 border border-b-2 border-b-gray-100 font-montserrat">
    <div className="flex items-center justify-between w-11/12 mx-auto">
      <div className="flex items-center gap-20">
        <h1 className="text-3xl font-bold text-[#0290ff]">Bookstore CMS</h1>
        <div className="text-gray-500 text-sm tracking-[1.9px] uppercase">
          <Link to="/" className="mr-20 hover:text-black">
            Books
          </Link>
          <Link to="/categories" className="hover:text-black active">
            Categories
          </Link>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#0290ff" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-10 h-10 border rounded-full cursor-pointer p-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>

    </div>
  </nav>
);

export default Navigation;
