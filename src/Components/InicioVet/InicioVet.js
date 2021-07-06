
import './InicioVet.css';
import perroGato from '../../Asets/img/perroGato.png';

function IniciosVet(){ return(
  <section id="promo">
      <div className="seccion1">
              <h2>BIENVENIDO A TU TIENDA DE MASCOTAS</h2>
                 <p>Queremos que conozcas nuestra propuesta de baño para mascotas, donde tenemos espacios dedicados para evitar la contaminación cruzada que puede llegar a existir en una veterinaria, aplica de lunes a viernes para mascotas que visitanla clínica por primera vez</p>
                 <h3>RECUERDA QUE NUESTRO EQUIPO MÉDICO CONFIRMARÁ LA CITA</h3>     
      </div>
      
      <div className="seccion2InicioVet">
        
        
            <div >  
               <img src={perroGato} width='300px' alt="Foto perro y gato" />
            </div>   
      </div>
   </section>
 )
}
 export default IniciosVet;