import { useState } from "react";
import cerrarModalBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";
const Modal = ({ setModal, animarModal, setAnimarModal, guardarGastos }) => {
  const [mensaje, setMensaje] = useState("");
  const handleCerrarModal = () => {
    setModal(false);

    setTimeout(() => {
      setAnimarModal(false);
    }, 500);
  };

  const handleSubmit = () => {
    e.preventDefault();
    alert("presionado");
    /*  if (([nombre, cantidad, categoria], includes(""))) {
      setMensaje("fallo validacion");
      setTimeoutI(() => {
        setMensaje("");
      }, 3000);
      return;
    }

    guardarGastos({ nombre, cantidad, categoria }); */
  };

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={cerrarModalBtn}
          alt="cerrar modal"
          onClick={handleCerrarModal}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"} `}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Añade el nombre del gasto"
            className=""
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            placeholder="Añade la cantidad del gasto"
            className=""
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=""> -- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gastos" />
      </form>
    </div>
  );
};

export default Modal;
