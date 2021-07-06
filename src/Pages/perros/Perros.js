import {perros} from "../../Components/Perros/Perros.json";
import Razas from "../../Components/Perros/Razas";
function Perros(){ 
    return(
   <div className="row py-3">
     {
         perros.map(perro=>(
          <div className="col-12 col-md-4" key={perro.id}>
            <Razas p1={perro.id} p2={perro.thumbanail} p3={perro.raza} p4={perro.descripcion}/>
          </div>
         ))
     }

   </div>
);
}
 export default  Perros;