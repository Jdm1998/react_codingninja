

 const navbar=()=>{
    return (
      <div className="navbar" style={style.nav}>
        
        <div style={style.cartContainer}>
          <img  style={style.cartIcon} src="https://image.flaticon.com/icons/png/512/126/126083.png"></img>
          <span style={style.cartCount}>3</span>
        </div>
      </div>
    );
}


const style = {
  image: {
    height: 120,
    width: 110,
    borderRadius: 50,
    background: "#ccc",
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",

    alignItems: "center",
  },
  cartContainer: {
    postion: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: 5,
  },
  cartIcon: {
    height: 32,
    marginRight: 8,
  },
};
export default navbar;

