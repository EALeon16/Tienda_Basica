export function Lista_User({ datosForm }) {
  return (
    <div>
      <div className="container">
        {datosForm.map((datoForm, index) => (
          <div className="celular" key={index}>
            <img src={datoForm.contraseña} alt="Contraseña" />
            <div className="celular-info">
              <h2>{datoForm.nombreUser}</h2>
              <p>{datoForm.direccion}</p>
              <p className="precio">$: {datoForm.correo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Lista_User;
