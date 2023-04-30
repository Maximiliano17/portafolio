//Styles
import styles from "../Modules/Experiencia.module.css"

function Experiencia() {

  return (
   <>
    {/* Experiencia */}
       <div className={styles.contenedor}>
       <section className={styles.buton}>
          <p>Proyectos</p> 
           <section className={styles.opciones}>
            <button>Grupal</button>
            <button>Individual</button>
            <button>Front-End</button>
            <button>Back-End</button>
           </section>
          </section>
        <section className={styles.proyectos}>
          
        </section>
       </div>
   </>
  )
}

export default Experiencia
