// ACA EL CODIGO DE REACT
import CardWidget from "../CardWidget";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <button>Autos</button>
        </li>
        <li>
          <button>Motos</button>
        </li>
        <li>
          <button>Camionetas</button>
        </li>
      </ul>
      <CardWidget />
    </div>
  );
}

export default NavBar;
