import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './layouts/Nav'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-wrapper">
          <Nav />
          <Main />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
