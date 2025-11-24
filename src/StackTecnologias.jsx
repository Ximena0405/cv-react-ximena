export default function Tecnologias({ tecnologias }) {
  return (
    <section className="tecno-container">
      <div className="tecno-card">
        <h2 className="tecno-titulo">Stack Tecnológico</h2>

        {Object.keys(tecnologias).map((categoria, i) => (
          <div className="tecno-grupo" key={i}>
            <h3 className="tecno-subtitulo">{categoria}</h3>
            <ul className="tecno-lista">
              {tecnologias[categoria].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
