import './Nav.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function Nav() {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
           <div className="container-fluid overflow-hidden">
                <li className="nav-item item">
                  <NavLink to="/Home">Home</NavLink>
                </li>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                      <li className="nav-item item">
                           <NavLink to="/Equipo" activeClassName="active">Equipo</NavLink>
                      </li>
                      <li className="nav-item item">
                          <NavLink to="/Servicios">Servicios</NavLink>
                      </li>
                      <li className="nav-item item">
                            <NavLink to="/Perros">Perros</NavLink>
                     </li>
                     <li className="nav-item item">
                            <NavLink to="/Agenda">Agenda tu cita</NavLink>
                     </li>

                     <li className="nav-item item">
                         <NavLink to="/Contactanos">Contactanos</NavLink>
                    </li>
                  </ul>
               </div>
            </div>
       </nav>
    </div>
    );
  }
  
  export default Nav;