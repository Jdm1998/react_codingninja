import Cart from'./cart'
import react from 'react';
import CartItem from './cartItem.js';
import Navbar from './nav.js';
class App extends react.Component {
  constructor(){
    super();
     this.state = {
      products: [
        {
          title: "phone1",
          qty: 1,
          price: 111,
          img: "",
        },
        {
          title: "phone2",
          qty: 2,
          price: 222,
          img: "",
        },
        {
          title: "phone3",
          qty: 3,
          price: 333,
          img: "",
        },
      ],
    };
  }render(){
  return (
    <div className="App">
      <Navbar products={this.stateproducts}/>
      <Cart products={this.state.products}/>
    </div>
  );
}
}

export default App;
