//Styles
import styles from "../Modules/Sobremi.module.css"
//Json
import certificate from "../../Json/certificado.json"

function Sobremi() {  
  return (
   <>
    <div className={styles.contenedor}> 
      <div className={styles.borde}>
        <div className={styles.certificado}>
          <section className={styles.informacion}>
            <span>{certificate.tipo}</span>
            <span>{certificate.nombre}</span>
            <span>{certificate.certificado}</span>
          </section>
          <section className={styles.informacion_dos}>
          <span>{certificate.fecha}</span>
          <span><a href={certificate.link} target="_BLANK">Ver Certificado</a></span>
          </section>
        </div>
      </div>
    </div>
   </>
  )
}

export default Sobremi
