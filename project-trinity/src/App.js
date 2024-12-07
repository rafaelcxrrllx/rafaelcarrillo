// Styling
import './styling/App.css';

// Pages
import Home from './pages/Home';

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
        </Routes>   
        </Router>     
    </div>
  );
}

export default App;
