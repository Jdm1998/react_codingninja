import React from "react";
import ReactDom from "react-dom";
import CartItem from "./cartItem";
  const Cart =(props)=> {
  
  // onIncrease = (product) => {
  //   console.log("hi  ", product);
  //   const { products } = this.state;
  //   var x = products.indexOf(product);
  //    products[x].qty += 1;

    // this.setState({
    //   products: products,
    // });


  // onDecrease = (product) => {
  //   console.log("hi  ", product);
  //   const { products } = this.state;
  //   var x = products.indexOf(product);
  //   if (products[x].qty > 0) products[x].qty -= 1;

  //   this.setState({
  //     products: products,
  //   });
  // };
  // onDelete = (product) => {
  //   console.log("hi  ", product);
  //   const { products } = this.state;
  //   var x = products.indexOf(product);
  //   products.splice(x, 1);
  //   this.setState({
  //     products: products,
  //   });
  // };

   {
    const { products } = props;
    return (
      <div className="cart">
        <h1>cart</h1>
        {products.map((product) => {
          return (
            <CartItem
              product={product}
               onIncrease={props.increase}
              onDecrease={props.decrease}
              onDelete={props.delete}
            />
          );
        })}
      </div>
    );
  }
}
export default Cart;
