import React from 'react'
import axios from 'axios'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import './App.css';
import './main.scss'


function App() {
  return (
    <div id="mainwrap">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App
