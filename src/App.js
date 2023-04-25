import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dash from './components/dash';
import NavBar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router basename="/AMA">
        <Routes>
          <Route path="/" element={ < Dash /> } />
          <Route path="/about" element={ < About /> } />
          <Route path="/contact" element= { < Contact /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
