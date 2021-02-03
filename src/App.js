import Cart from'./cart'
import react from 'react';
import Navbar from './nav';
import firebase from 'firebase/app'
class App extends react.Component {
  constructor() {
    super();
    this.state = {
      products: [ ]
       
    };
  }
  componentDidMount(){
    firebase
      .firestore()
      .collection('items')
      .get()
      .then((snapshot)=>{
      //  console.log("firebase",snapshot);
     snapshot.docs.map((doc)=>{
return " ";
        })
        const products = snapshot.docs.map((doc) => {
          console.log("data", doc.data());

          return doc.data();
        });
       this.setState ( {
         products
       })

      })
       
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
