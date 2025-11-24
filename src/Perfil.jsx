export default function Perfil({ descripcion, aptitudes, hobbies }) {
  return (
    <section className="perfil-box">
      <h2 className="perfil-titulo">Quién Soy</h2>
      <p className="perfil-descripcion">{descripcion}</p>

      <div className="perfil-seccion">
        <h3 className="perfil-subtitulo">Aptitudes</h3>
        <ul className="perfil-lista">
          {aptitudes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="perfil-seccion">
        <h3 className="perfil-subtitulo">Hobbies</h3>
        <ul className="perfil-lista perfil-lista-hobbies">
          {hobbies.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
