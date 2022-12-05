import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemDetailContainer from './componentes/intemDetailContainer/detalleContainer';
import ListContainer from './componentes/listContainer';
import ItemListcontainer from './componentes/ItemListContainer';
import Cart from './componentes/cart/CartWitget';
import CartProvider from './context/cartContext';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <CartProvider>
          <NavBar logo = 'http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/4debfda444f7e54.png'/>
          <ListContainer saludo='PokeStikers'/>
          <Routes>
            <Route path='/' element={<ItemListcontainer/>}/>
            <Route path='/tipo/:tipoId' element={<ItemListcontainer/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
            <Route path='/carrito' element={<Cart/>}/>
          </Routes>
        </CartProvider>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
