import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { bd } from '../data/bd';

export default function Main() {
  const [cervezaSeleccionada, setCervezaSeleccionada] = useState(null);
  const [nombreGrupo, setNombreGrupo] = useState("");
  const [numeroMesa, setNumeroMesa] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [pedidos, setPedidos] = useState([]);

  const handleSeleccion = (e) => {
    const idSeleccionado = parseInt(e.target.value);
    const cerveza = bd.find(c => c.id === idSeleccionado);
    setCervezaSeleccionada(cerveza);
  };

  const borrarPedido = (id) => {
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  };

  const cambiarEstadoPedido = (id) => {
    const nuevosPedidos = pedidos.map(p => {
      if (p.id === id) {
        return {
          ...p,
          estado: p.estado === "pendiente" ? "servido" : "pendiente"
        };
      }
      return p;
    });
    setPedidos(nuevosPedidos);
  };

  const handleEnviarPedido = () => {
    const nuevoPedido = {
      id: pedidos.length + 3,
      grupo: nombreGrupo,
      mesa: numeroMesa,
      cerveza: cervezaSeleccionada?.nombre || "",
      cantidad: cantidad,
      estado: "pendiente"
    };

    setPedidos([...pedidos, nuevoPedido]);
  };

  return (
    <main>
      <div className="container mt-3 p-5 border shadow-lg">
        <h1 className="text-center mb-5">----- Vista usuario -----</h1>
        <div className="row">
          <div className="col-6">
            <h3>Grupo</h3>
            <label htmlFor="nombreGrupo" className="label-control">
              Nombre del grupo:
            </label>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Borrachos de DAW2"
              value={nombreGrupo}
              onChange={(e) => setNombreGrupo(e.target.value)}
            />
            <label htmlFor="numeroMesa" className="label-control">
              Mesa número
            </label>
            <input
              type="number"
              className="form-control mt-2"
              placeholder="0"
              value={numeroMesa}
              onChange={(e) => setNumeroMesa(e.target.value)}
            />

            <h3 className="mt-5">Haz tu pedido</h3>
            <div className="d-flex gap-3">
              <select name="cervezas" id="cervezas" className="form-control" onChange={handleSeleccion}>
                <option value="">Selecciona qué birra quieres</option>
                {bd.map((cerveza) => (
                  <option key={cerveza.id} value={cerveza.id}>
                    {cerveza.nombre}
                  </option>
                ))}
              </select>

              <input
                type="number"
                className="form-control"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
            <button className="btn btn-success mt-4 w-100" onClick={handleEnviarPedido}>
              ¡Enviar pedido!
            </button>
          </div>
          <div className="col-6 border">
            <div className="p-3 d-flex">
              <div className="w-50">
                <img
                  src={cervezaSeleccionada ? cervezaSeleccionada.imagen : ""}
                  className="w-50"
                />
              </div>
              <div>
                <h4>{cervezaSeleccionada ? cervezaSeleccionada.nombre : ""}</h4>
                <p>
                  {cervezaSeleccionada
                    ? cervezaSeleccionada.descripcion
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tablaPedidos" className="container mt-5 mb-5 p-5 border shadow-lg">
        <div className="row">
          <h1 className="text-center mb-5">----- Vista camareros -----</h1>
          <h3>Pedidos</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Grupo</th>
                <th>Mesa</th>
                <th>Cerveza</th>
                <th>Cantidad</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Borrachos de DAW2</td>
                <td>1</td>
                <td>Estrella Galicia</td>
                <td>3</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-warning w-100 btn-sm">
                      Pedido pendiente...
                    </button>
                    <button className="btn btn-outline-danger w-100 btn-sm">
                      🗑 Borrar pedido
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Cabezones contentos</td>
                <td>1</td>
                <td>Estrella DAM</td>
                <td>2</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-success w-100 btn-sm">
                      ¡Pedido servido!
                    </button>
                    <button className="btn btn-outline-danger w-100 btn-sm">
                      🗑 Borrar pedido
                    </button>
                  </div>
                </td>
              </tr>

              {pedidos.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.grupo}</td>
                  <td>{p.mesa}</td>
                  <td>{p.cerveza}</td>
                  <td>{p.cantidad}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        className={`btn w-100 btn-sm ${p.estado === "pendiente" ? "btn-outline-warning" : "btn-outline-success"}`}
                        onClick={() => cambiarEstadoPedido(p.id)}
                      >
                        {p.estado === "pendiente" ? "Pedido pendiente..." : "¡Pedido servido!"}
                      </button>
                      <button
                        className="btn btn-outline-danger w-100 btn-sm"
                        onClick={() => borrarPedido(p.id)}
                      >
                        🗑 Borrar pedido
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
