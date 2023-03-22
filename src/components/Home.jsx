//Styles
import styles from "../Modules/Home.module.css"

function Home() {

    return (
     <>
      {/* Home */}
       <header className={styles.header}>
        <section className={styles.listas}>
        <button> <a>Home</a> </button>
        <button> <a>Experiencia</a> </button>
        <button> <a>Habilidades</a> </button>
        </section>

        <section className={styles.listas}>
        <a>Git</a>
        <a>Linkedin</a>
        <a>Negocio</a>
        </section>

       </header>

       <div className={styles.home}>
        <section className={styles.gift}>
            
        </section>
          <section className={styles.presentacion}>
           <p>Hola Soy...</p>
           <h1>Maximiliano Delfor Dos Santos Burgos</h1>
           <h2>Desarrollador web Full Stack</h2>
           <button>Descarga mi Cv</button>
          </section>    
       </div>

     </>
    )
  }
  
  export default Home
  