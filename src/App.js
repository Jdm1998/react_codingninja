import Cart from'./cart'
import react from 'react';
import CartItem from './cartItem.js';
import Navbar from './nav.js';
class App extends react.Component {
  constructor() {
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
  }
  increase = (product) => {
    const { products } = this.state;
    var x = products.indexOf(product);
    products[x].qty += 1;

    this.setState({
      products: products,
    });
  };

  decrease = (product) => {
    const { products } = this.state;
    var x = products.indexOf(product);
    if(products[x].qty>0)
    products[x].qty -= 1;

    this.setState({
      products: products,
    });
  };
  delete = (productd) => {
    const { products } = this.state;
    var x = products.indexOf(productd);
    products.splice(x,1);

    this.setState({
      products
    });
  };
getCount=()=>{
  let count=0;
  const{products}=this.state;
  products.forEach((product)=>{
count+=product.qty;
  })
  return count;
}
  render() {
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <Cart products={this.state.products}
         increase={this.increase} 
         decrease={this.decrease}
         delete={this.delete}
         getCount={this.getCount}
         />
      </div>
    );
  }
}

export default App;
