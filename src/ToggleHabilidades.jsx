// ToggleHabilidades.jsx
import Habilidades from "./Habilidades";

export default function ToggleHabilidades({ visible, onToggle, habilidades }) {
  return (
    <section className="toggle-container">
      <button className="toggle-btn" onClick={onToggle}>
        {visible ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {visible && <Habilidades habilidades={habilidades} />}
    </section>
  );
}
