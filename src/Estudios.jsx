import "./Estudios.css"
export default function Estudios() {
    return(
    <section className="estudios-container">
      <div className="estudios-card">
        <h1 className="estudios-titulo">Formación Académica</h1>

        {/* Bachiller */}
        <div className="estudio-item">
          <h2 className="estudio-tipo">Técnico</h2>
          <p className="estudio-institucion">
            Análisis y Desarrollo de Software
          </p>
          <p className="estudio-fecha">2022 - 2023</p>
        </div>

        {/* Tecnólogo */}
        <div className="estudio-item">
          <h2 className="estudio-tipo">Tecnólogo</h2>
          <p className="estudio-institucion">Servicio Nacional De Aprendizaje (SENA)</p>
          <p className="estudio-fecha">29/04/2025 - Actualidad</p>
        </div>
      </div>
    </section>
    )
}