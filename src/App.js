import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Datos from "./Componentes/Datos/Datos";
import Login from "./Componentes/Login/Login";
import Monitoreo from './Componentes/Monitoreo/Monitoreo';
import Estadistica from './Componentes/Estadistica/Estadistica';
import ReactDOM from "react-dom/client";

function App() {
  const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route index element={<Login />} />
            <Route path="/Datos" element={<Datos />} />
            <Route path="/Monitoreo" element={<Monitoreo />} />
            <Route path="/Estadistica" element={<Estadistica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
