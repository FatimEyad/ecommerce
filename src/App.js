import './App.css';
import Header from './components/Header/Header';
import Home from './modules/Home/Home';
import {Route,Routes} from 'react-router-dom'
import Product from './modules/Product/Product';
import Products from './modules/Products/Products';
import Categories from './components/Categories/Categories';
import CategoriesProducts from './modules/CategoriesProducts/CategoriesProducts';
import Cart from './modules/Cart/Cart';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/categories/:name' element={<CategoriesProducts/>}/>
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
     
    </div>

  );
}

export default App;
