import { useState } from "react";
import NavBar from "./components/NavBar";
import PromoBanner from "./components/PromoBanner";
import Categories from "./components/Categories";
import ItemListContainer from "./components/ItemListContainer";
import CartPanel from "./components/CartPanel";
import BuyerForm from "./components/BuyerForm";
import Contacto from "./components/Contacto";
import "./components/App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (item) => {
    const index = cart.findIndex(i => i.name === item.name);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].qty += item.qty;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (index) => setCart(cart.filter((_, i) => i !== index));
  const emptyCart = () => setCart([]);

  return (
    <>
      {/* NavBar con navegación */}
      <NavBar
        cartCount={cart.length}
        toggleCart={toggleCart}
        setActivePage={setActivePage}
      />

      {/* Contenido según página activa */}
      {activePage === "home" && (
        <>
          <PromoBanner />
          <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />
          <Categories addToCart={addToCart} />
        </>
      )}

      {activePage === "contacto" && <Contacto />}

      {/* Carrito y formulario lateral */}
      {isCartOpen && (
        <div className="cart-container">
          <CartPanel cart={cart} removeItem={removeItem} emptyCart={emptyCart} />
          <BuyerForm />
        </div>
      )}
    </>
  );
}

export default App;

