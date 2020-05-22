import React from "react";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";

import CategoriasProvider from "./context/CategoriasContext";

function App() {
  return (
    <CategoriasProvider>
      <Header></Header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <Formulario />
          </div>
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;
