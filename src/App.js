import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
      
    </div>
  );
}

function Counter(){
  const abc = useState(0)
  console.log(abc)
  return(
    <div>
      <h1>Count: </h1>
      <button>Increase</button>
    </div>
  )
}
// function App() {
//   const products = [
//     {name:'laptop', price: 154000},
//     {name:'phone', price: 93000},
//     {name:'watch', price: 33000},
//     {name:'tablet', price: 5000}
//   ]
//   return (
//     <div className="App">
//       {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)
//       }
//       {/* <Product name="laptop" price="50000"></Product>
//       <Product name="phone" price="75000"></Product>
//       <Product name="watch" price="9000"></Product>
//       <Product name="Earphn" price="2000"></Product> */}
//     </div>
//   );
// }
// function Product(props){
//   return (
//     <div className='product'>
//       <h3>Name: {props.name} </h3>
//       <p>price: {props.price} </p>
//     </div>
//   )
// }

export default App;
