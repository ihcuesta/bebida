import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

export const Formulario = () => {
  const {} = useContext(CategoriasContext);

  return (
    <form action="" className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por ingrediente"
          />
        </div>

        <div className="col-md-4">
          <select className="form-control" name="categoria" id="">
            <option value="">-- Selecciona categoría --</option>
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar bebidas"
          />
        </div>
      </div>
    </form>
  );
};
