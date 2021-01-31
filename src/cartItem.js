import React from 'react';
import ReactDom from 'react-dom';
  class CartItem extends React.Component {
     
    
      // increase=()=>{
      //        console.log("he");
      //       this.setState({
      //           qty:this.state.qty+1,
      //       })
      //       console.log(this.state)
      //   }
      //   decrease=()=>{
      //     console.log("de");
      //     if(this.state.qty!=0)
      //     this.setState({

      //       qty:this.state.qty-1
      //     })
      //     console.log(this.state)
      //   }
    render () {
      const { title, qty, price, img } = this.props.product;

        return (
          <div className="cart-item">
            <div className="left-block">
              <img src="" style={styles.image} />
            </div>
            <div className="right-block">
              <div style={{ color: "#777", font: 55 }}>{title}</div>
              <div> price:{price}</div>
              <div>qty:{qty}</div>
              <div className="cart-item-actions">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png"
                  onClick={() => this.props.onIncrease(this.props.product)}
                  className=" action increase"
                ></img>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/minus-512.png"
                  className=" action decrease"
                  onClick={()=>{this.props.onDecrease(this.props.product)}}
                ></img>
                <img
                  src="https://image.flaticon.com/icons/png/512/61/61848.png"
                  className="action delete"
                  onClick={()=>{this.props.onDelete(this.props.product)}}
                ></img>
              </div>
            </div>
          </div>
        );
    }
}
const styles={
    image: {
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;