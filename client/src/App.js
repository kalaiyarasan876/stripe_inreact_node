import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Cancel from './components/Cancel';
import CartDetails from './components/CartDetails';
import Headers from './components/Headers';
import Home from './components/Home';
import Success from './components/Success';

function App() {
  return (
    <>
     <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/success' element={<Success />}/>
      <Route  path='/cancel' element={<Cancel />}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
