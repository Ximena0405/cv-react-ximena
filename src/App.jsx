import Cabecera from "./Cabecera";
import Perfil from "./Perfil";
import Experiencia from "./Experiencia";
import Estudios from "./Estudios";
import Tecnologias from "./StackTecnologias"; 
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Cabecera />
      <Perfil />
      <Experiencia />
      <Estudios />
      <Tecnologias />
    </div>
  );
}

export default App;
