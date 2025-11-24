export default function Experiencia({ experiencia }) {
  return (
    <section className="exp-container">
      <h2 className="exp-title">Experiencia</h2>

      {experiencia.map((item, i) => (
        <div className="exp-card" key={i}>
          <h3>{item.cargo}</h3>
          <p>{item.fecha}</p>
          <p>{item.descripcion}</p>
        </div>
      ))}
    </section>
  );
}
