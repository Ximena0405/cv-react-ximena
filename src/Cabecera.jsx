export default function Cabecera({ nombre, profesion, correo, telefono, ubicacion, foto }) {
  return (
    <section className="perfil-container">
      <div className="foto-container">
        <img src={foto} alt={nombre} className="foto" />
      </div>

      <div className="perfil-card">
        <h1 className="perfil-nombre">{nombre}</h1>
        <h2 className="perfil-titulo">{profesion}</h2>

        <div className="perfil-info">
          <p>
            <span className="perfil-label">Email:</span>{" "}
            <a href={`mailto:${correo}`}>{correo}</a>
          </p>
          <p>
            <span className="perfil-label">Teléfono:</span>{" "}
            <a href={`tel:${telefono}`}>{telefono}</a>
          </p>
          <p>
            <span className="perfil-label">Ubicación:</span> {ubicacion}
          </p>
        </div>
      </div>
    </section>
  );
}
