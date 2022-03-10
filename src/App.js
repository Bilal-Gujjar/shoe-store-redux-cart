import Navbar from './comp/pages/navbar'
import './App.css';
import Home from './comp/pages/home'
import Product from './comp/pages/product'
import Contact from './comp/pages/contact'
import Notfound from './comp/pages/notfound'

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Cart from './comp/pages/cart';



function App() {
  return (
    
    <BrowserRouter >
      <Navbar/>
      <Routes >
      <Route path='/' element={<Home />} />
      <Route path='home' element={<Home />} /> 
        <Route path='product' element={<Product />}>
          
          </Route>
        <Route path ='contact' element={<Contact/>}/>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='*' element={<Notfound />}/>
      </Routes>
      
     
    </BrowserRouter>
    
  );
}

export default App;
