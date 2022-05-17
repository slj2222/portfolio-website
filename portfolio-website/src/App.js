// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Bio from './components/Bio';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={ <LandingPage /> }/>
            <Route path="/bio" element={ <Bio /> }/>
            <Route path="/projects" element={ <Projects /> }/>  
              
          </Routes>
        </Router>
    </div>
  );
}

export default App;
