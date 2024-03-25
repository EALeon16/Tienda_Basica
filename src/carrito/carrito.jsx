import "./Carrito.css";

import { useNavigate } from "react-router-dom";
function Carrito() {
    
  const navigate = useNavigate();
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    let total = 0
productos.map((producto) => {
    total += parseFloat(producto.precio) * producto.cantidad;
});
    const eliminardelCarrito = (id) => {
        console.log("dentro de eliminar", id)
        let productos = JSON.parse(localStorage.getItem("productos")) || [];
        console.log("tengo los prdocutos", productos)
    
    // Buscar el índice del producto en el carrito
    const index = productos.findIndex((producto) => producto.id === id);

    if (index !== -1) {
        if (productos[index].cantidad > 1) {
            // Si la cantidad es mayor a uno, reducir la cantidad en uno
            productos[index].cantidad -= 1;
        } else {
            // Si la cantidad es uno, eliminar el producto del carrito
            productos.splice(index, 1);
        }
        // Actualizar el carrito en el localStorage
        localStorage.setItem("productos", JSON.stringify(productos));
        window.location.reload();
    }

      };
      const cancelarCompra = () => {  
        localStorage.removeItem("productos");
        navigate("/principal"); // Navega al formulario de registro
      };
      const compraExitosa = () => {
        localStorage.removeItem("productos");
        navigate("/compraExitosa"); 
      };
    
    return (

        <aside className="product-detail">
  <div className="title-container">
    <p className="title">My order</p>
  </div>

  <div className="my-order-content">
    {productos.map((producto, index) => (
      <div className="shopping-cart" key={index}>
        <figure>
          <img src={producto.imagenUrl} alt={`Imagen de ${producto.marca} ${producto.modelo}`} />
        </figure>
        <div>
          <p>{producto.marca} {producto.modelo}</p>
          <p>Precio: ${producto.precio * producto.cantidad}</p>
          <p>Cantidad: {producto.cantidad}</p> 
        </div>
        <button  className="btnEliminarCarrito" onClick={() => eliminardelCarrito(producto.id)} >Eliminar</button>
      </div>
    ))}

    <h1>Total: {total}</h1>
    <button className="btnComprarTotal" onClick={compraExitosa}>
      Comprar
    </button>
    <button className="btnCancelarCompra" onClick={cancelarCompra}>
      Cancelar compra
    </button>
  </div>
</aside>
    )
}
export default Carrito;