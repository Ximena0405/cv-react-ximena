// import { PerfilData } from "./Data"
import "./Perfil.css"
export default function Perfil() {
//   const {descripcion, aptitud1, aptitud2, aptitud3, aptitud4, aptitud5, hobbie1, hobbie2, hobbie3, hobbie4} = PerfilData
    return(
       <section className="perfil-container">
      <div className="perfil-card">
        {/* Título principal */}
        <h1 className="perfil-titulo">Perfil</h1>

        {/* Descripción personal */}
        <div className="perfil-descripcion">
          <p>
            Soy una estudiante de Análisis y Desarrollo de Software con interés en el desarrollo web y la lógica de programación. Me caracterizo por aprender rápido, tener buena organización y disfrutar resolver problemas mediante soluciones simples y funcionales. Busco seguir fortaleciendo mis habilidades técnicas mientras desarrollo proyectos cada vez más completos.
          </p>
        </div>

        {/* Aptitudes */}
        <div className="perfil-seccion">
          <h3 className="perfil-subtitulo">Aptitudes</h3>
          <ul className="perfil-lista">
            <li>Conocimientos básicos en HTML, CSS y JavaScript</li>
            <li>Comprensión de estructura de componentes en React</li>
            <li>Manejo básico de Git y GitHub</li>
            <li>Buenas prácticas de organización de código</li>
            <li>Capacidad para aprender tecnologías rápidamente</li>
          </ul>
        </div>

        {/* Hobbies */}
        <div className="perfil-seccion">
          <h3 className="perfil-subtitulo">Hobbies</h3>
          <ul className="perfil-lista perfil-lista-hobbies">
            <li>Practicar ejercicios de lógica y algoritmos</li>
            <li>Crear pequeñas interfaces y experimentos en CSS</li>
            <li>Ver tutoriales de desarrollo web </li>
            <li>Investigar nuevas herramientas y recursos de programación</li>
          </ul>
        </div>
      </div>
    </section>
    )
}