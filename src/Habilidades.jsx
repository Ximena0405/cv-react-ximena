// Habilidades.jsx
export default function Habilidades({ habilidades }) {
  return (
    <section className="hab-container">
      <h2 className="hab-title">Habilidades</h2>

      <div className="hab-grid">
        {habilidades.map((item, i) => (
          <div className="hab-card" key={i}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
