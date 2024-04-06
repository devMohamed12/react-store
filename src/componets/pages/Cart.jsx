import "../style/cart.css";

function Cart(props) {
  const { cartItem, onAdd, setCartItem } = props;
  const itemsPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice >  500 ? 0 : 10;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const onRemove = (product) => {
    const extist = cartItem.find((x) => x.id === product.id);
    if (extist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem({ ...extist, qty: extist.qty - 1 });
    }
  };

  return (
    <div className="cart-conotainer">
      <div>
        {cartItem.length === 0 ? (
          <h5 className="text-center mb-4 cart-empty"> cart is empty </h5>
        ) : (
          <h5 className="text-center mb-4 cart-empty">your cart </h5>
        )}
      </div>

      <div className="cartItems-container ">
        {cartItem.map((item) => {
          return (
            <div key={item.id} className="cartItem mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="cartItem-image"
              />

              <div className="cartItem-details">
                <h6>{item.title}</h6>

                <div className="ItemQty my-2">
                  count : {item.qty} * ${item.price.toFixed(2)}
                </div>
                <button
                  onClick={() => {
                    onAdd(item);
                  }}
                  className="btn btn-danger m-1"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    onRemove(item);
                  }}
                  className="btn btn-danger"
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {cartItem.length > 0 && (
        <div className="cartSumary">
          <div>
            <div>Items price : ${itemsPrice.toFixed(2)}</div>
          </div>

          <div>
            <div> tax price : ${taxPrice.toFixed(2)}</div>
            <div> </div>
          </div>
          <div>
            <div>shipping price : ${shippingPrice.toFixed(2)}</div>
          </div>
          <div>
            <div>total price ${totalPrice.toFixed(2)}</div>
          </div>

          <button className="btn btn-danger w-100 mt-3 ">checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
