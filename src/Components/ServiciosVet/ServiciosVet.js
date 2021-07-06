
import './ServiciosVet.css';
import paciente from '../../Asets/img/paciente.png';
import veterinario from '../../Asets/img/veterinario.png';
import vacunacion from '../../Asets/img/vacunacion.png';

function ServiciosVet(){ return(
  
  <section id="Servicios">
       <article className="titulocaja"> 
           <h3>Servicios</h3>
           <hr></hr>
       </article>

        <div className="cajageneral">
           <article className="cajaservicio">
             <img src={paciente} width='200px'/>
               <h5>Pacientes</h5>
               <p>This is a longer card with supporting text below as a natural lead-in to additional content.</p>
  	       </article>
           
           <article className="cajaservicio">
              <img src={veterinario} />
               <h5>Médico Veterinario</h5>
               <p>This is a longer card with supporting text below as a natural lead-in to additional content.</p>    
          </article>
                
          <article className="cajaservicio">
          <img src={vacunacion} />
               <h5>vacunación</h5>
               <p>This is a longer card with supporting text below as a natural lead-in to additional content.</p>    
          </article>
        </div>
  </section>
  

 )
}
 export default ServiciosVet;