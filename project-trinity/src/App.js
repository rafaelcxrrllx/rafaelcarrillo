// Styling
import './styling/App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Trash from './pages/Trash';
import Pain from './pages/Pain';

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
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/standuptotrash' element={<Trash/>}/>
          <Route path='/painpsychologistla' element={<Pain/>}/>

        </Routes>   
        </Router>     
    </div>
  );
}

export default App;
