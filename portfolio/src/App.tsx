import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Main from './component/main/Main';
import Footer from './component/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
