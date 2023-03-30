//Styles
import styles from "../Modules/Experiencia.module.css"

function Experiencia() {

  return (
   <>
    {/* Experiencia */}
       <div className={styles.contenedor}>
         <section className={styles.proyectos}>
             <div className={styles.card}>
               <img src="" alt="Video" />
               <p>Contenido</p>
             </div>
             <div className={styles.card}>
               <img src="" alt="Video" />
               <p>Contenido</p>
             </div>
             <div className={styles.card}>
               <img src="" alt="Video" />
               <p>Contenido</p>
             </div>
         </section> 
       </div>
   </>
  )
}

export default Experiencia
