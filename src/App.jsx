// App.jsx
import { useState } from "react";
import { cvData } from "./data/cvData";

import Cabecera from "./Cabecera";
import Perfil from "./Perfil";
import Experiencia from "./Experiencia";
import Estudios from "./Estudios";
import StackTecnologias from "./StackTecnologias";

import FormularioTecnologia from "./FormularioTecnologia";
import ToggleHabilidades from "./ToggleHabilidades";

import "./App.css";

function App() {
  // Mantener estado como objeto para las 3 categorías
  const [tecnologias, setTecnologias] = useState(cvData.tecnologias);
  const [habilidadesVisibles, setHabilidadesVisibles] = useState(false);

  // agregar tecnología recibe { nombre, categoria }
  const agregarTecnologia = ({ nombre, categoria }) => {
    setTecnologias((prev) => {
      // si la categoria no existe, crearla
      const nuevaCategoria = prev[categoria] ? [...prev[categoria], nombre] : [nombre];
      return {
        ...prev,
        [categoria]: nuevaCategoria,
      };
    });
  };

  const toggleHabilidades = () => {
    setHabilidadesVisibles((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Cabecera {...cvData.cabecera} />

      <Perfil
        descripcion={cvData.perfil.descripcion}
        aptitudes={cvData.perfil.aptitudes}
        hobbies={cvData.perfil.hobbies}
      />

      <Experiencia experiencia={cvData.experiencia} />
      <Estudios estudios={cvData.estudios} />

      {/* Stack dinámico desde estado */}
      <StackTecnologias tecnologias={tecnologias} />

      {/* Formulario para agregar nuevas tecnologías */}
      <FormularioTecnologia onAgregar={agregarTecnologia} />

      {/* Toggle de Habilidades */}
      <ToggleHabilidades
        visible={habilidadesVisibles}
        onToggle={toggleHabilidades}
        habilidades={cvData.habilidades}
      />
    </div>
  );
}

export default App;
