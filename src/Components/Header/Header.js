
import './Header.css';
import logo from '../../Asets/img/logo.jpg';
import ModalLoginVet from './ModalLoginVet';

function Header(){ return(
   <header>
       <div className="logo">
           <img src={logo} alt="imagen Logo"/>
       </div>
       <div className="botones">
           <button className="btn-azul" data-bs-toggle="modal" data-bs-target="#login"><i class="fas fa-power-off"></i> Ingresar</button>
           <button className="btn-registro"><i class="fas fa-user-plus"></i> Registrarse</button>
       </div>
       < ModalLoginVet />
   </header>
  

 )
}
 export default Header;
