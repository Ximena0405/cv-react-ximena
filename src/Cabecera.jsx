// import { CabeceraData } from "./Data"
import "./cabecera.css"
export default function Cabecera() {
//   const { nombre, ocupacion, correo, telefono, ubicacion} = CabeceraData;
  return (
    <section className="perfil-container">
        <div className="foto-container">
            <img src="" alt="ximena" className="foto" />
        </div>
      <div className="perfil-card">
        <h1 className="perfil-nombre">XIMENA ROLDAN GARCIA</h1>
        <h2 className="perfil-titulo">
          Estudiante
        </h2>

        <div className="perfil-info">
          <p>
            <span className="perfil-label">Email:</span>{" "}
            <a href="ximenaroldan367@gmail.com">
              ximenaroldan367@gmail.com
            </a>
          </p>
          <p>
            <span className="perfil-label">Teléfono:</span>{" "}
            <a href="tel:+573150896523">3150896523</a>
          </p>
          <p>
            <span className="perfil-label">Ubicación:</span>Calle 37 #58 B-17
          </p>
        </div>
      </div>
    </section>
  )
}
