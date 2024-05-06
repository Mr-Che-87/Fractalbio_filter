import './App.css'
import { useEffect } from 'react';

import Main from './components/Main/Main'

import './js/jquery-3.4.1.min.js';
import './js/jquery.magnific-popup.min.js';
import './js/jquery-ui.min.js';
import './js/owl.carousel.min.js';
import './js/script.js';
import './js/basket.js'
import './js/stacktable.js'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  //подключение js-скриптов (костыль):
    useEffect(() => {
        const scriptUrls = [
          './js/jquery-3.4.1.min.js',
          './js/jquery.magnific-popup.min.js',
           './js/jquery-ui.min.js',
          './js/owl.carousel.min.js',
          './js/basket.js',
          './js/stacktable.js',
          './js/script.js',
        ];

        scriptUrls.forEach(url => {
          const script = document.createElement('script');
          script.src = url;
          script.async = true;
          document.body.appendChild(script);
          return () => {
              document.body.removeChild(script);
          };
      });
  });
  

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>

    
  )
}

export default App