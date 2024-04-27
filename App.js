import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Login from './components/Login.jsx';
import Rating from './components/Rating';
import HomePage2 from './components/HomePage';
import Signin from './components/Signup.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      
      <Route index element={<HomePage2 />} />
      <Route path='/Home' element={<HomePage2 />} />
      <Route path='/Rating' element={<Rating />} />
      <Route path='/Service' element={<Booking />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signin />} />
      
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
