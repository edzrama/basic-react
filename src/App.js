import React, {useEffect} from 'react';
import Header from './components/Header';
import Home from './views/Home';

function App() {
  useEffect(() => {
    document.body.classList.add("text-gray-600", "font-cormorant");
    return () => {
      document.body.classList.remove("text-gray-600", "font-cormorant");
    };
  }, []);

  return (
    <div className="grid md:grid-cols-9">
      <Header />
      <Home />
    </div>
  );
}

export default App;
