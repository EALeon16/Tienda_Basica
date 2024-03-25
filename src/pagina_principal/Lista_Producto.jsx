import React, { useState } from "react";
import Gestionar_Producto from "./GestionProducto";
import './Vista_principal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Alert from '@mui/material/Alert';
function Listar_Producto({ datosForm, actualizarListaB }) {
  const [mostrarGestionar, setMostrarGestionar] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [showAlert, setShowAlert] = useState(false);



  const handleAction = (datoForm) => {
    setMostrarGestionar(true);
    setProductoSeleccionado(datoForm);
  };

  const handleClose = () => {
    setMostrarGestionar(false);
  };

  const handleSaveChanges = (productoEditado) => {
    console.log("handle save change editar");

    const updatedList = datosForm.map(item => {
      if (item.id === productoEditado.id) {
        return productoEditado;
      }
      return item;
    });

    actualizarListaB(updatedList);
    handleClose();
  };
  const handleDelete = (productoId) => {
    const updatedList = datosForm.filter(item => item.id !== productoId);
    actualizarListaB(updatedList);
    handleClose();
  };
  ///// carrito////
  const AgregarCarrito = (datoForm) => {
    // Obtener la lista de productos del Local Storage
    let productos = JSON.parse(localStorage.getItem("productos")) || [];

    // Verificar si el nuevo producto ya está en el carrito
    const productoExistenteIndex = productos.findIndex(producto => producto.id === datoForm.id);

    if (productoExistenteIndex !== -1) {
      // Si el producto ya está en el carrito, aumenta la cantidad en 1
      productos[productoExistenteIndex].cantidad += 1;
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1
      productos.push({ ...datoForm, cantidad: 1 });
    }

    // Guardar la lista actualizada en el Local Storage
    localStorage.setItem("productos", JSON.stringify(productos));
    setShowAlert(true);
  }


  return (
    <div>
      <div className="container">
      {showAlert && (
        <Alert severity="success">Añadido al carrito</Alert>
      )}
        {datosForm.map((datoForm, index) => (
          <div className="celular" key={datoForm.id}>
            <img src={datoForm.imagenUrl} />
            <div className="celular-info">
              <h2>{datoForm.marca}</h2>
              <p>{datoForm.modelo}</p>
              <p className="precio">$: {datoForm.precio}</p>
              <div>
                <button className="btnAccion" onClick={() => handleAction(datoForm)}>Acción</button>
                <button className="btnCarrito" onClick={() => AgregarCarrito(datoForm)}>
                  <FontAwesomeIcon icon={faShoppingCart} /> 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {mostrarGestionar && (
        <Gestionar_Producto
          datosForm={productoSeleccionado}
          onClose={handleClose}
          onSave={handleSaveChanges}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Listar_Producto;