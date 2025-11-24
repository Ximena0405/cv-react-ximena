export default function Estudios({ estudios }) {
  return (
    <section className="est-container">
      <h2 className="est-title">Estudios</h2>

      {estudios.map((item, i) => (
        <div className="est-card" key={i}>
          <h3>{item.titulo}</h3>
          <p>{item.institucion}</p>
          <p>{item.fecha}</p>
        </div>
      ))}
    </section>
  );
}
