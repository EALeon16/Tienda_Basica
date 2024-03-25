import './Vista_principal.css'
import Menu from './Menu.jsx';
import AcordionImagenes from './AcordionImagenes.jsx';
import ModalRegistro from './Form_Registrar.jsx';
import image1 from './cel1.jpg'
import image2 from './cel2.jpg'
import image3 from './cel3.jpg'
import image4 from './cel4.jpg'

import { useNavigate } from "react-router-dom";
function Vista_Principal() {
  const navigate = useNavigate();
  ///imaganes
  const coolImages = [
    {
      image: image2,
    },

    {
      image: image1,
    },
    {
      image: image3,
    },

    {
      image: image4,
    },


  ];
  const datosAcceso = sessionStorage.getItem("datosAcceso");
  const cerrarSesion = () => {
    sessionStorage.clear();
    navigate("/");
  }


  return (
    <div className="App">
      <Menu />
      <div className="user-info">
        <div className="user-name">{datosAcceso}</div>
        <a href="#" onClick={cerrarSesion} className="logout-link">Cerrar sesión</a>
      </div>


      <main>
        <section className="hero">
          <AcordionImagenes items={coolImages} />
        </section>
        <section className="tabs">
          <div className="container">
            <ModalRegistro />

          </div>

        </section>
      </main>

    </div>
  )

}
export default Vista_Principal