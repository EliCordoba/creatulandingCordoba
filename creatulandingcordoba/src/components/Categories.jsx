const Categories = ({ addToCart }) => {
const categorias = [
    { nombre: "Huawei", img: "huawei.avif", price: 250000 },
    { nombre: "Samsung", img: "samsung.jpg", price: 300000 },
    { nombre: "Motorola", img: "motorola.jpg", price: 190000 },
    { nombre: "Xiaomi", img: "xiaomi.jpg", price: 200000 },
];

const handleAdd = (cat) => {
    addToCart({ ...cat, qty: 1 });
};

return (
    <section className="categories">
    {categorias.map((cat) => (
        <div key={cat.nombre} className="category-card">
        <img src={`/imagenes/${cat.img}`} alt={`Categoría ${cat.nombre}`} />
        <p>{cat.nombre}</p>
        <p>${cat.price}</p>
        <button onClick={() => handleAdd(cat)}>Agregar al carrito</button>
        </div>
    ))}
    </section>
);
};

export default Categories;

