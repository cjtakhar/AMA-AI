import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dash from './components/dash';
import NavBar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/AMA-AI">
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={ < Dash /> } />
          <Route path="/about" element={ < About /> } />
          <Route path="/contact" element= { < Contact /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

