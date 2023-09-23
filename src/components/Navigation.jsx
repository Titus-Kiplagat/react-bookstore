import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="py-4 uppercase flex items-center gap-20">
    <h1 className="text-2xl font-bold text-blue-500">Bookstore CMS</h1>
    <div className="text-gray-500">
      <Link to="/" className="mr-5">
        Books
      </Link>
      <Link to="/categories">
        Categories
      </Link>
    </div>
  </nav>
);

export default Navigation;
