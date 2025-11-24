import { cvData } from "./data/cvData";

import Cabecera from "./Cabecera";
import Perfil from "./Perfil";
import Experiencia from "./Experiencia";
import Estudios from "./Estudios";
import Tecnologias from "./StackTecnologias";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Cabecera principal */}
      <Cabecera {...cvData.cabecera} />

      {/* Sección de perfil */}
      <Perfil 
        descripcion={cvData.perfil.descripcion} 
        aptitudes={cvData.perfil.aptitudes} 
        hobbies={cvData.perfil.hobbies} 
      />

      {/* Experiencia laboral */}
      <Experiencia experiencia={cvData.experiencia} />

      {/* Estudios */}
      <Estudios estudios={cvData.estudios} />

      {/* Stack tecnológico */}
      <Tecnologias tecnologias={cvData.tecnologias} />
    </div>
  );
}

export default App;
