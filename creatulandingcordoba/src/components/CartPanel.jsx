const CartPanel = ({ cart, removeItem, emptyCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

return (
    <aside className="cart-panel">
    <h2>🛒 Carrito</h2>
    {cart.length === 0 ? <p>Tu carrito está vacío</p> : (
        <>
        <ul>
            {cart.map((item, index) => (
            <li key={index} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div>
                <p>{item.name}</p>
                <p>Cant: {item.qty}</p>
                <p>Precio: ${item.price}</p>
                  <p>Total: ${item.price * item.qty}</p>
                <button onClick={() => removeItem(index)}>Eliminar</button>
                </div>
            </li>
            ))}
        </ul>
        <h3>Total: ${total}</h3>
        <button onClick={emptyCart}>Vaciar Carrito</button>
        </>
    )}
    </aside>
);
};

export default CartPanel;

