import Cabecera from "./Cabecera"
import Perfil from "./Perfil"
import Experiencia from "./Experiencia"
import Estudios from "./Estudios"
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <Cabecera />
      <Perfil />
      <Experiencia />
      <Estudios />
    </div>
  )
}

export default App
