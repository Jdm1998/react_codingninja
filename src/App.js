import Cart from'./cart'
import react from 'react';
import Navbar from './nav';
import firebase from 'firebase/app'
class App extends react.Component {
  constructor() {
    super();
    this.state = {
      products: [ ],
      loading:true
       
    };
  }
  componentDidMount(){
//     firebase
//       .firestore()
//       .collection('items')
//       .get()
//       .then((snapshot)=>{
//       //  console.log("firebase",snapshot);
//      snapshot.docs.map((doc)=>{
// return " ";
//         })
//         const products = snapshot.docs.map((doc) => {
//           console.log("data", doc.data());
// const data=doc.data();
// data["id"]=doc.id;
//           return data;
//         });
//        this.setState ( {
//          products,
//          loading:false
//        })

//       })
        firebase
      .firestore()
      .collection('items')
         .onSnapshot((snapshot) => {
           console.log("firebase", snapshot);
                snapshot.docs.map((doc)=>{
           return " ";
                   })
                   const products = snapshot.docs.map((doc) => {
                     console.log("data", doc.data());
           const data=doc.data();
           data["id"]=doc.id;
                     return data;
                   });
                  this.setState ( {
                    products,
                    loading:false
                  })

                 })
         }
         addProduct=()=>{
           firebase.firestore().collection("items").add({
             img:
               "data:image/jpeg;base64,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",

             qty: 5,
             price: 5633,
             title: " washing machine",
           });
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
total=()=>{
  let t=0;
  const{products}=this.state;
  products.forEach((product)=>{
    t+=product.qty*product.price;
  })
  return t;
}
  render() {
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <button onClick={this.addProduct}style={{padding:20,fontSize:24 }}>add product</button>
        <Cart
          products={this.state.products}
          increase={this.increase}
          decrease={this.decrease}
          delete={this.delete}
          getCount={this.getCount}
        />
        {this.state.loading&&<h1>loading...</h1>}
        <span>total={this.total()}</span>
      </div>
    );
  }
}

export default App;
