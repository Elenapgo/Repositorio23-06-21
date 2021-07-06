
import './EquipoVet.css';
import fotoperro from '../../Asets/img/golden.jpg';

function EquipoVet(){ return(
  <section id="promo">
      <div className="seccion1">
              <h2>AGENDA UNA CITA AHORA PARA RECLAMAR TU PRIMER BAÑO GRATIS</h2>
                 <p>Queremos que conozcas nuestra propuesta de baño para mascotas, donde tenemos espacios dedicados para evitar la contaminación cruzada que puede llegar a existir en una veterinaria, aplica de lunes a viernes para mascotas que visitanla clínica por primera vez</p>
                 <h3>RECUERDA QUE NUESTRO EQUIPO MÉDICO CONFIRMARÁ LA CITA</h3>     
                  <div>
                       <button className="btn-registro"><i class="far fa-calendar-alt"></i>  Agendar</button>
                  </div>
      </div>
      
      <div className="seccion2">
        <h3>GRATIS PRIMER BAÑO</h3>
        
            <div >  
               <img src={fotoperro} width='200px' alt="Foto golden" />
            </div>   
      </div>
   </section>
 )
}
 export default EquipoVet;