import React from "react";
import ReactDom from "react-dom";
import CartItem from "./cartItem";
class Cart extends React.Component {
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
  onIncrease = (product) => {
    console.log("hi  ", product);
    const { products } = this.state;
    var x = products.indexOf(product);
     products[x].qty += 1;

    this.setState({
      products: products,
    });
  };

  onDecrease = (product) => {
    console.log("hi  ", product);
    const { products } = this.state;
    var x = products.indexOf(product);
    if (products[x].qty > 0) products[x].qty -= 1;

    this.setState({
      products: products,
    });
  };
  onDelete = (product) => {
    console.log("hi  ", product);
    const { products } = this.state;
    var x = products.indexOf(product);
    products.splice(x, 1);
    this.setState({
      products: products,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        <h1>cart</h1>
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              onIncrease={this.onIncrease}
              onDecrease={this.onDecrease}
              onDelete={this.onDelete}
            />
          );
        })}
      </div>
    );
  }
}
export default Cart;
