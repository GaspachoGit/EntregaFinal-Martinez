/* import logo from './logo.svg';
 */import './App.css';
import NavBar from './componentes/NavBar';

import ListContainer from './componentes/ItemListContainer';
import Card   from './componentes/Card';

const products = [
  {
    id: 1,
    pName: 'Product1',
    desc: 'This is the product number 1',
    imgURL: 'https://www.pngmart.com/files/13/Pokemon-Charmander-PNG-Pic.png' 
  },
  {
    id: 2,
    pName: 'Product2',
    desc: 'This is the product number 2',
    imgURL: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png' 
  },
  {
    id: 3,
    pName: 'Product3',
    desc: 'This is the product number 3',
    imgURL: 'https://static.wikia.nocookie.net/espokemon/images/4/43/Bulbasaur.png' 
  },
  
]



function App() {
  return (
    <div className="App">
      <NavBar logo = 'http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/4debfda444f7e54.png'/>
      <ListContainer saludo='Saludos! (Stikers Pókemon)'></ListContainer>
      <div className='products'>
        {products.map((product)=>(
          <Card id={product.id} pName={product.pName} desc={product.desc} imgURL={product.imgURL}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
/*           <div key = {product.id} className="card">
            <h3>{product.name}</h3>
            <img src = {product.imgURL} alt='Imagen del producto {product.name}' className="prodImg"/>
            <p>{product.desc}</p>
            <Button pulsado={añadir} texto='Añadir al carrito'></Button>
          </div>  */