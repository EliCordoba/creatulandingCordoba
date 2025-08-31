import { ShoppingCart } from "lucide-react";

const CartWidget = ({ cartCount, toggleCart }) => {
return (
    <div className="cart" onClick={toggleCart}>
    <ShoppingCart size={24} />
    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
    </div>
);
};

export default CartWidget;

