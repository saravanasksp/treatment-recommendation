import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Result from './components/Result'

function App() {
  return (
    <>
    <Router>
         <Navbar/>          
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/question1" element={<Question1 />} />
           <Route path="/question2" element={<Question2 />} />
           <Route path="/question3" element={<Question3 />} />
           <Route path="/result" element={<Result />} />
         </Routes>
     </Router>
    </>
  );
}

export default App;
