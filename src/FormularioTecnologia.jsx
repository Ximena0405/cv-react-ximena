// FormularioTecnologia.jsx
import { useState } from "react";

export default function FormularioTecnologia({ onAgregar }) {
  const [entrada, setEntrada] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (entrada.trim().length === 0) return;

    onAgregar(entrada.trim());
    setEntrada("");
  };

  return (
    <form className="form-tecno" onSubmit={handleSubmit}>
      <h3>Agregar Tecnología</h3>

      <input
        type="text"
        placeholder="Escribe una tecnología..."
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}
