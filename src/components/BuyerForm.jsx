const BuyerForm = () => {
return (
    <aside className="buyer-form">
    <h2>🧾 Datos del comprador</h2>
    <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Teléfono" required />
        <button type="submit">Comprar</button>
    </form>
    </aside>
);
};

export default BuyerForm;

