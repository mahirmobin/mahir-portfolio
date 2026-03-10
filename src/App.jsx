import { useState, useEffect, useCallback } from 'react';
import Cursor from './components/Cursor';
import Home from './components/Home';
import Internships from './components/Internships';
import Freelance from './components/Freelance';
import Loader from './components/Loader';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <Cursor />
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'internships' && <Internships setCurrentPage={setCurrentPage} />}
      {currentPage === 'freelance' && <Freelance setCurrentPage={setCurrentPage} />}
    </>
  );
}

export default App;
