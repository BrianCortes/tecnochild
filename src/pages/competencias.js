import React from 'react'
import Colums from '../components/colums'
import Image from '../assets/competition.jpeg'
import Image2 from '../assets/language.jpeg'
import Image3 from '../assets/advantages.jpeg'
import Image4 from '../assets/matematicas.jpeg'
import './styles.sass'

class Competencias extends React.Component {
  render() {
    return (
      <div>
        <div className="introduction">
          <h1>Competencias</h1>
        </div>
        <Colums reverse>
          <div>
            <p>
              <strong>Competencias verbales:</strong>
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
              <strong>Lenguaje escrito:</strong>
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
        <Colums reverse>
          <div>
            <p>
              <strong>Matemática:</strong>
            </p>
            <p>
              La gran contribución del ordenador se sitúa en el desarrollo del
              pensamiento geométrico y espacial, favoreciendo el desarrollo de
              conceptos de simetría, patrones, organización espacial. Los niños
              producen objetos y pueden actuar sobre ellos, aumentar o disminuir
              su tamaño, juntar formas que dan origen a nuevas formas, colorear
              espacios, etc.
            </p>
          </div>
          <img
            onMouseOver={this.onHover}
            onMouseOut={this.onOut}
            src={Image4}
          />
        </Colums>
        <Colums>
          <div>
            <p>
              <strong>Conocimiento del mundo:</strong>
            </p>
            <p>
              A través de Internet podemos tener acceso a personas, imágenes,
              sonidos y informaciones muy diversas y difícilmente accesibles de
              otro modo, que pueden seguramente constituirse como poderosos
              recursos educativos.
            </p>
            <p>
              Desde buscar información sobre ballenas y sus hábitats, a
              “visitar” un país lejano de done ha venido el nuevo compañero, a
              consultar una enciclopedia interactiva para saber lo que son
              cohetes, ver los trabajos realizados por colegas de otra escuela.
            </p>
          </div>
          <img
            onMouseOver={this.onHover}
            onMouseOut={this.onOut}
            src={Image3}
          />
        </Colums>
        <div className="introduction">
          <p>
            Más allá del acceso a la información es también posible utilizar la
            tecnología para transformar y producir nueva información. Los niños
            pueden editar en papel o online sus trabajos, sea un periódico
            escolar, un proyecto de búsqueda desarrollado o una historia.
          </p>
          <p>
            La utilización de cámaras digitales permite documentar experiencias
            vividas por los niños en el ámbito de su comunidad o en otros
            contextos, fácilmente editables en el periódico escolar, el blog del
            aula o la pagina web de la escuela.
          </p>
        </div>
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
        <div className="introduction">
          <p>
            "La integración de la tecnología en la escuela, por muy avanzada que
            sea, no es capaz, por sí misma, de transformarse en innovación
            pedagógica. De hecho, la innovación pedagógica no reside en la
            tecnología, pero sí en la mente de quien diseñará el contexto en el
            que la tecnología será utilizado – el PROFESOR."
          </p>
        </div>
      </div>
    )
  }
}

export default Competencias
