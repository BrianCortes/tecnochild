import React from 'react'
import Colums from '../components/colums'
import Image from '../assets/iphone.jpeg'
import Image1 from '../assets/teacher.jpeg'
import './styles.sass'

class Importancia extends React.Component {
  render() {
    return (
      <div>
        <div className="introduction">
          <h1>La importancia de la tecnología</h1>
          <p>
            LA IMPORTANCIA DE LA TECNOLOGIA El uso de la tecnología educativa,
            como recurso de apoyo para la educación esta enriqueciendo el
            proceso de enseñanza tradicional, ya que se ha comprobado que mejora
            el aprendizaje, además de crear condiciones apropiadas para que el
            estudiante y el profesor, interactúen dentro de un clima de practica
            – aprendizaje.
          </p>
          <p>
            La tecnología educativa es una combinación de maquinas, electrónica
            y métodos de enseñanza diseñados para satisfacer las necesidades de
            ésta sociedad cambiante. Se transmite a un punto lejos o varios
            puntos, mediante microondas, audio, satélite y sistemas digitales.
            Permite que las personas se comuniquen visual y auditivamente.
          </p>
          <Colums>
            <div>
              <p>
                <strong>¿Porque enseñar tecnología desde el preescolar?</strong>
              </p>
              <p>
                El mundo tecnológico atrae el interés de los niños. La docente
                parte de los saberes previos de los alumnos y utiliza la actitud
                espontánea de curiosidad para ampliar, profundizar y lograr que
                los niños accedan a niveles crecientes de conocimiento.
              </p>
            </div>
            <img
              onMouseOver={this.onHover}
              onMouseOut={this.onOut}
              src={Image}
            />
          </Colums>
          <Colums reverse>
            <div>
              <p>
                <strong>El papel de la Docente…</strong>
              </p>
              <p>
                Al trabajar con las representaciones mentales de los niños, no
                se pueden prever todas sus intervenciones. La docente tendrá que
                estar abierta a las posibilidades no previstas, por lo que habrá
                reservado un espacio para la improvisación, lo que no significa
                hacer cualquier cosa, sino “sacar la carta indicada” en el
                momento adecuado.
              </p>
              <p>
                A través de preguntas, la maestra preparar un cuestionario para
                que surjan las representaciones mentales.
              </p>
            </div>
            <img
              onMouseOver={this.onHover}
              onMouseOut={this.onOut}
              src={Image1}
            />
          </Colums>
        </div>
      </div>
    )
  }
}

export default Importancia
