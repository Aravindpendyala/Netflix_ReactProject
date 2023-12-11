
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NetflixShow from './pages/NetflixShow';
import Footer from './components/Footer/Footer';

function App() {
  return (

     <BrowserRouter>
    <div className="App">
      <Routes>
         <Route path='/' element={<Home/>}/>
         </Routes>
         <Routes>
         <Route path='/netflix-show' element={<NetflixShow/>}/>
         </Routes>
         <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
