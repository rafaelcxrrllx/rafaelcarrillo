// Styling
import './styling/App.css';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Trash from './pages/Trash';

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
          <Route path='/trash' element={<Trash/>}/> 
          {/* Pages */}
          <Route path='/home' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>

        </Routes>   
        </Router>     
    </div>
  );
}

export default App;
