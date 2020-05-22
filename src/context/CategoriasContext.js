import React, { createContext, useState, useEffect } from "react";

// Crear Context
export const CategoriasContext = createContext();

const CategoriasProvider = props => {
  // crear el state del context
  const [categorias, guardarCategorias] = useState([]);
  return (
    <CategoriasContext.Provider>{props.children}</CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
