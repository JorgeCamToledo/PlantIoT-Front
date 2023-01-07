import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Datos from "./Componentes/Datos/Datos";
import Login from "./Componentes/Login/Login";
import Monitoreo from './Componentes/Monitoreo/Monitoreo';
import Estadistica from './Componentes/Estadistica/Estadistica';
import Circuito from './Componentes/Circuitos/Circuito';
// import your route components too

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route index element={<Login />} />
          <Route path="/datos" element={<Datos />} />
          <Route path="/circuito" element={<Circuito />} />
          <Route path="/monitoreo" element={<Monitoreo />} />
          <Route path="/estadistica" element={<Estadistica />} />
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

