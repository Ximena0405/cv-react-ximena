import "./StackTecnologias.css";

export default function Tecnologias() {
  const tecnologias = {
    Lenguajes: ["HTML5", "CSS", "JavaScript", "Python", "PHP", "Node.js"],
    Frameworks: ["React", "Express", "Tailwind CSS"],
    Herramientas: ["Git & GitHub", "Visual Studio Code", "MySQL", "MongoDB"],
  };

  // Validación simple
  if (
    tecnologias.Lenguajes.length === 0 &&
    tecnologias.Frameworks.length === 0 &&
    tecnologias.Herramientas.length === 0
  ) {
    return (
      <section className="tecno-container">
        <div className="tecno-card">
          <h2 className="tecno-titulo">Stack Tecnológico</h2>
          <p>No hay tecnologías registradas.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="tecno-container">
      <div className="tecno-card">
        <h2 className="tecno-titulo">Stack Tecnológico</h2>

        {tecnologias.Lenguajes.length > 0 && (
          <div className="tecno-grupo">
            <h3 className="tecno-subtitulo">Lenguajes</h3>
            <ul className="tecno-lista">
              {tecnologias.Lenguajes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {tecnologias.Frameworks.length > 0 && (
          <div className="tecno-grupo">
            <h3 className="tecno-subtitulo">Frameworks</h3>
            <ul className="tecno-lista">
              {tecnologias.Frameworks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {tecnologias.Herramientas.length > 0 && (
          <div className="tecno-grupo">
            <h3 className="tecno-subtitulo">Herramientas</h3>
            <ul className="tecno-lista">
              {tecnologias.Herramientas.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
