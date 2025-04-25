import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { bd } from '../data/bd';

export default function Usuarios() {
  const [cervezaSeleccionada, setCervezaSeleccionada] = useState(null);

  const handleSeleccion = (e) => {
    const idSeleccionado = parseInt(e.target.value);
    const cerveza = bd.find(c => c.id === idSeleccionado);
    setCervezaSeleccionada(cerveza);
  };

  return (
    <>
      <main class="d-flex justify-content-center">
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
              />
              <label htmlFor="numeroMesa" className="label-control">
                Mesa numero
              </label>
              <input
                type="number"
                className="form-control mt-2"
                placeholder="0"
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

                <input type="number" defaultValue="0" className="form-control" />
              </div>
              <button className="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
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
        </main>
        </>
  );
}
