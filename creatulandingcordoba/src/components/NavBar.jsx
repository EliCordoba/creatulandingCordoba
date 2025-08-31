import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";

const NavBar = ({ cartCount, toggleCart, setActivePage }) => {
  return (
    <header className="navbar">
      <h1 className="logo" onClick={() => setActivePage("home")}>
        Rio Tech
      </h1>

      <nav className="nav-links">
        <button onClick={() => setActivePage("home")}>Inicio</button>
        <button onClick={() => setActivePage("contacto")}>Contacto</button>
      </nav>

      <SearchBar />

      <div className="icons">
        <CartWidget cartCount={cartCount} toggleCart={toggleCart} />
      </div>
    </header>
  );
};

export default NavBar;







