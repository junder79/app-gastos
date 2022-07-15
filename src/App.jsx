import React, { useState } from "react";
import Header from "./components/header";
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      ></Header>
    </div>
  );
}

export default App;
