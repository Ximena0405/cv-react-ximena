export default function StackTecnologias({ tecnologias }) {
  return (
    <section className="tecno-box">
      <h2 className="tecno-titulo">Stack Tecnológico</h2>

      {Object.keys(tecnologias).map((categoria, i) => (
        <div className="tecno-seccion" key={i}>
          <h3 className="tecno-subtitulo">{categoria}</h3>

          <ul className="tecno-lista">
            {tecnologias[categoria].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
