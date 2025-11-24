// import { ExperienciaData } from "./Data"
import "./Experiencia.css"
export default function Experiencia() {
//   const {Experiencia1, Experiencia2, Experiencia3} = ExperienciaData
    return(
        <section className="experiencia-container">
      <div className="experiencia-card">
        <h2 className="experiencia-titulo">Experiencia Laboral</h2>
        <ul className="experiencia-lista">
          <li>
            Auxiliar de Desarrollo Frontend — DevSoft Junior Lab <br />
            Febrero 2024 – Mayo 2024
          </li>
          <li>
            Practicante de Soporte en Desarrollo Web — TechZone Digital <br />
            Marzo 2024 – Junio 2022
          </li>
          <li>
            Auxiliar de Desarrollo Web — PixelCode Studio <br />
            Enero 2022 – Diciembre 2023
          </li>
        </ul>
      </div>
    </section>
    )
}