import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/login" element={<LoginComponent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
