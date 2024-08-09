// Styling
import './styling/App.css';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

// Components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


function App() {
    

  return (

    <div>
      
       <Router>
        <ScrollToTop/>
        <Routes>   
          <Route path='/' element={<Home/>}/> 
          <Route path='/trinityla' element={<Home/>}/> 
          {/* Pages */}
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>

        </Routes>   
        </Router>     
    </div>
  );
}

export default App;
