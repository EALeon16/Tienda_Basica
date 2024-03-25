import { useState } from "react";
import './Vista_principal.css'
import Listar_Producto from './Lista_Producto';
import { useNavigate } from "react-router-dom";


function ModalRegistro() {
  const [showAlert, setShowAlert] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  
  // DATOS CELL//\
  const [datosCell, setDatosCell] = useState({
    id:'',
    descripcion: '',
    marca: '',
    modelo: '',
    precio: '',
    imagenUrl: '',
  });
  const [listaB, serListaB] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosCell({ ...datosCell, [name]: value });
  };
  const actualizarListaB = (nuevaLista) => {
    serListaB(nuevaLista);
  };

  const guardarProducto = () => {

    const nuevoId = listaB.length > 0 ? listaB[listaB.length - 1].id + 1 : 1;

  // Crear un nuevo objeto de datosCell con el nuevo ID
  const nuevoProducto = { ...datosCell, id: nuevoId };

  // Agregar el nuevo producto a la listaB
  serListaB((value) => [...value, nuevoProducto]);
    setDatosCell({
      id:'',
      descripcion: '',
      marca: '',
      modelo: '',
      precio: '',
      imagenUrl: '',
    });
  };


  // Función para abrir el modal
  const abrirModal = () => {
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalVisible(false);
  };

  const navigate = useNavigate();

  const IrVistaCarrito = () => {
    navigate("/carrito"); 
  };


  return (
    <div>
      <button className="boton" onClick={abrirModal}>Registrar Producto</button>
      <div><button className="botonComprar" onClick={IrVistaCarrito} >Comprar</button></div>
      

      {modalVisible && (
        <div className="modal">
          <div className="modal-contenido">
            <form className="registro-formulario">
              
              <div className="form-group">
                <label htmlFor="marca">Marca:</label>
                <input onChange={handleChange} value={datosCell.marca} type="text" id="marca" name="marca" required />
              </div>
              <div className="form-group">
                <label htmlFor="modelo">Modelo:</label>
                <input onChange={handleChange} value={datosCell.modelo} type="text" id="modelo" name="modelo" required />
              </div>
              <div className="form-group">
                <label htmlFor="descripcion">Descripción:</label>
                <input onChange={handleChange} value={datosCell.descripcion} type="text" id="descripcion" name="descripcion" required />
              </div>

              <div className="form-group">
                <label htmlFor="precio">Precio:</label>
                <input onChange={handleChange} value={datosCell.precio} type="number" id="precio" name="precio" required />
              </div>

              <div className="form-group">
                <label htmlFor="imagen">URL de la Imagen:</label>
                <input onChange={handleChange} value={datosCell.imagenUrl} type="text" id="imagenUrl" name="imagenUrl" required />              </div>


            </form>
            <div className="botones-container">
              <button className="btnRegistrarModal" onClick={guardarProducto}>Guardar</button>
              <button className="modal-cerrar" onClick={cerrarModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
      <div>
        <Listar_Producto datosForm={listaB}  actualizarListaB={actualizarListaB} />
      </div>
    </div>
  );
}

export default ModalRegistro;
