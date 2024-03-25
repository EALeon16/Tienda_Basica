import "./Inicio.css";
import { useState } from "react";
import Lista_User from "./Lista_User.jsx";
import FormUser from "./FormUser.jsx";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
function Inicio() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const handleRegistrarClick = () => {
    navigate("/registro"); // Navega al formulario de registro
  };
  const handleInicio = (event) => {
    event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  ////////////////////////////////////////////////////////
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.map((usuario)=>{
      if(username == usuario.correo && password == usuario.password){
        console.log("entro al if")
        sessionStorage.setItem("datosAcceso", usuario.nombres);
        sessionStorage.setItem("direccionUsuario", usuario.direccion);
        sessionStorage.setItem("pass", usuario.password);
        navigate("/principal");
        return;
      }else{
        setShowAlert(true);
      }
    })
  };

  return (
    <div className="background">
      
      <div className="shape"></div>
      <div className="shape"></div>

      <form onSubmit={handleInicio}>
      {showAlert && (
        <Alert severity="error">Usuario o contraseña incorrectos.</Alert>
      )}
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input  type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input  type="password" placeholder="Password" id="password" />

        <button className="botonI" onClick={handleInicio}>Log In</button>
        <button className="botonI" onClick={handleRegistrarClick}>Registrar</button>
      </form>
    </div>
  );
}
export default Inicio;
