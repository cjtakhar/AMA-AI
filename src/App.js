import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dash from './components/dash';
import NavBar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={ < Dash /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
