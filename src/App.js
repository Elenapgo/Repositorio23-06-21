import './App.css';
import Header from'./Components/Header/Header';
import Nav from './Components/Nav/Nav';
import FooterVet from './Components/FooterVet/FooterVet'; 
import EquipoVet from './Components/EquipoVet/EquipoVet';
import ServiciosVet from './Components/ServiciosVet/ServiciosVet';
import InicioVet from './Components/InicioVet/InicioVet';
import Perros from './Pages/perros/Perros';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} 
from "react-router-dom";


function App() {
  return (
    <div>
    <Router>
    <Header />
          <Nav />
       <Switch>
       <Route exact path="/Home">
            <InicioVet />
          </Route>
          <Route path="/Equipo">
             <EquipoVet />
          </Route>
          <Route path="/Servicios">
             <ServiciosVet />
          </Route>
          <Route path="/Perros">
             <Perros />
          </Route>

          <Route path="/Agenda">
          </Route>
          <Route path="/Contactanos"> 
          </Route>
         
          <Route exact path="/">
            <InicioVet />
          </Route>


        </Switch>
        <FooterVet />
    </Router>

    </div>
  );
}
export default App;