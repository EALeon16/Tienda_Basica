import React, { useState } from "react";
import './Vista_principal.css'

function Gestionar_Producto({ datosForm, onClose, onSave, onDelete }) {
  const [productoEditado, setProductoEditado] = useState(datosForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoEditado({ ...productoEditado, [name]: value });
  };

  const handleSave = () => {
    onSave(productoEditado);
    onClose();
  };
  const handleDelete = () => {
    onDelete(productoEditado.id);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <form className="registro-formulario">
      <div className="form-group">
        <label htmlFor="marca">Marca:</label>
        <input
          value={productoEditado.marca}
          type="text"
          id="marca"
          name="marca"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="modelo">Modelo:</label>
        <input
          value={productoEditado.modelo}
          type="text"
          id="modelo"
          name="modelo"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción:</label>
        <input
          value={productoEditado.descripcion}
          type="text"
          id="descripcion"
          name="descripcion"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="precio">Precio:</label>
        <input
          value={productoEditado.precio}
          type="number"
          id="precio"
          name="precio"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="imagen">URL de la Imagen:</label>
        <input
          value={productoEditado.imagenUrl}
          type="text"
          id="imagenUrl"
          name="imagenUrl"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <button className="BtnGestionGuardar" type="button" onClick={handleSave}>Guardar</button>
        <button className="BtnGestionCancelar" type="button" onClick={handleCancel}>Cancelar</button>
        <button className="BtnGestionEliminar" type="button" onClick={handleDelete}>Eliminar</button>
      </div>
    </form>
  );
}

export default Gestionar_Producto;
