import { useNavigate } from "react-router-dom";
function Compra_exitosa(){
  const direccion = sessionStorage.getItem("direccionUsuario")
  const pass = sessionStorage.getItem("pass")
  console.log(direccion)
    const navigate = useNavigate();
    const principal =() =>{
        navigate("/principal");

    }
    return(
        <div className="containerExito">
      <div className="contentExito">
        <h1>¡Felicidades!</h1>
        <p>Su compra se ha realizado con éxito.</p>
        <p>El envío llegará a su domicilio: {direccion}{pass} , en los próximos días.</p>
        <img src="https://via.placeholder.com/200" alt="Envío" />
        <button className="btnCancelarCompra" onClick={principal}>
      Volver al principio
    </button>
      </div>
    </div>
    )
}
export default Compra_exitosa