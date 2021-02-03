    const CartItem =(props)=> {
     
    
      
      const { title, qty, price, img } = props.product;

        return (
          <div className="cart-item">
            <div className="left-block">
              <img src={img} style={styles.image} />
            </div>
            <div className="right-block">
              <div style={{ color: "#777", font: 55 }}>{title}</div>
              <div> price:{price}</div>
              <div>qty:{qty}</div>
              <div className="cart-item-actions">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png"
                  onClick={() => props.onIncrease(props.product)}
                  className=" action increase"
                ></img>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/minus-512.png"
                  className=" action decrease"
                  onClick={()=>{props.onDecrease(props.product)}}
                ></img>
                <img
                  src="https://image.flaticon.com/icons/png/512/61/61848.png"
                  className="action delete"
                  onClick={()=>{props.onDelete(props.product)}}
                ></img>
              </div>
            </div>
          </div>
        );
    
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