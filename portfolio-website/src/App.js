// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="inner-app">
        <Header />
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={ <LandingPage /> }/>
              <Route path="/bio" element={ <Bio /> }/>
              <Route path="/projects" element={ <Projects /> }/> 
              <Route path="/blogs" element={ <Blogs /> }/> 
              <Route path="/contact" element={ <Contact /> }/>  
            </Routes>
          </Router>
        </div>
    </div>
  );
}

export default App;
