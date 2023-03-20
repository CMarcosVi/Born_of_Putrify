import "./styles.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Quartoo from "./partes/Prologo";
import Sala from "./partes/Sala";
import Cozinha from "./partes/Cozinha";
import Banheiro from "./partes/Banheiro";
import Carro from "./partes/Carro";

export default function App() {
  return (
    <Router>
      <div className="lista">
        <nav className="nav-bar">
          <h1 className="titulo">Prologo</h1>
          <ul className="routes">
            <li>
              <Link to="/">Quarto</Link>
            </li>
            <li>
              <Link to="/sala">Sala</Link>
            </li>
            <li>
              <Link to="/cozinha">Cozinha</Link>
            </li>
            <li>
              <Link to="/banheiro">Banheiro</Link>
            </li>
            <li>
              <Link to="/carro">Carro</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route exact path="/" element={<Quartoo />} />
            <Route exact path="/sala" element={<Sala />} />
            <Route exact path="/cozinha" element={<Cozinha />} />
            <Route exact path="/banheiro" element={<Banheiro />} />
            <Route exact path="/carro" element={<Carro />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
