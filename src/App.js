import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="w-11/12 mx-auto h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<BookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
