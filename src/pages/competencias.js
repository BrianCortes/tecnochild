import React from 'react'
import Colums from '../components/colums'
import Image from '../assets/competition.jpeg'
import Image2 from '../assets/language.jpeg'
import Image3 from '../assets/advantages.jpeg'
import './styles.sass'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <div className="introduction">
          <h1>Competencias</h1>
        </div>
        <Colums reverse>
          <div>
            <p>
              <strong>Competencias verbales</strong>
            </p>
            <ul>
              <li>
                Los juegos de ordenador animan la producción de un discurso más
                complejo y fluido.
              </li>
              <li>
                Los niños son estimulados a utilizar el lenguaje, sobre todo
                cuando utilizan programas abiertos (open ended) que fomentan la
                exploración y la fantasía, como es el caso de los programas de
                diseño, haciendo relatos mientras dibujan, dislocan objetos o
                “escriben”
              </li>
              <li>
                Los niños cuentan historias más elaboradas acerca de los dibujos
                realizados en el ordenador
              </li>
              <li>
                La interacción con los ordenadores aumenta la comunicación
                verbal y la colaboración entre los niños y proporciona
                situaciones de conflicto sociocognitivo propiciadoras de
                aprendizaje.
              </li>
            </ul>
          </div>
          <img onMouseOver={this.onHover} onMouseOut={this.onOut} src={Image} />g
        </Colums>
        <Colums>
          <div>
            <p>
              <strong>Lenguaje escrito</strong>
            </p>
            <ul>
              <li>
                Las TIC permiten explorar letras y palabras, copiar nombres y
                frases utilizando el teclado y ultrapasando las dificultades
                motoras que se colocan a algunos niños, frente a la escritura
                manuscrita, y realizando así tareas que de otra forma no
                conseguían realizar.
              </li>
              <li>
                Elaborar historias y textos más largos y complejos, aburriéndose
                menos con los eventuales errores.
              </li>
              <li>
                Desarrollar los procesos constructivos de escritura de
                naturaleza colaborativa, más fácilmente que a través de la
                utilización de los instrumentos de escritura tradicional.
              </li>
              <li>Correo electrónico.</li>
            </ul>
          </div>
          <img
            onMouseOver={this.onHover}
            onMouseOut={this.onOut}
            src={Image2}
          />
        </Colums>
        <div className="introduction">
          <h1>Ventajas</h1>
        </div>
        <Colums reverse>
          <div>
            <p>
              <strong>
                Ventajas de la utilización del ordenador en enseñanza y
                aprendizaje:
              </strong>
            </p>
            <ul>
              <li>Aprendizaje más atractivo.</li>
              <li>
                Corresponde mejor a las necesidades individuales de los niños.
              </li>
              <li>Promueve la autonomía.</li>
              <li>Acceso a una gran variedad de información.</li>
              <li>Anima los niños a explorar y a crea.</li>
            </ul>
          </div>
          <img
            onMouseOver={this.onHover}
            onMouseOut={this.onOut}
            src={Image3}
          />
        </Colums>
      </div>
    )
  }
}

export default IndexPage
