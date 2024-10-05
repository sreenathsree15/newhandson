import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        {/* <Route path="/login" element={<LoginComponent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
