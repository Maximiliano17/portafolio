//Styles
import styles from "../Modules/Sobremi.module.css"
//Imagenes
import foto from "../assets/icons/portafolio.png"

function Sobremi() {  

  return (
   <>
    {/* Sobremi */}
    <div id="Sobremi" className={styles.contenedor}>
      <section className={styles.foto}>
      <img src={foto} alt="foto" />      
      </section>
      <section className={styles.texto}>
        <h3>Sobre mi</h3>
        <p>20/05/2005</p>
        <p>
          Desarrollador web enfocado en el área del Font end, desde siempre he buscado mejorar mi capacidad tanto de programación como de trabajo. Apasionado de nuevas oportunidades disfruto de trabajar solo y en grupo si lo amerita la situación.
        </p>
        <h3>Certificados</h3>
        <p>
        Diploma del curso HTML5 y CSS3 (OpenBootcamp) <br></br>
         <br></br>
        Certificate EF SET (EF International Language Centers) <br></br>
        <br></br>
        Diploma de Introducción a la programación (OpenBootcamp) <br></br>
         <br></br>
        </p>
        <h3>Educacion</h3>
        <p>
        Tecnico en informatica personal y profecional,
        Escuela de Educacion Secundaria Tecnica n°5
        (Cursando el ultimo año.)
        </p>
      </section>
    </div>
   </>
  )
}

export default Sobremi
