import React from 'react'
import Colums from '../components/colums'
import Image from '../assets/space.jpg'
import Image1 from '../assets/teacher.jpeg'
import './styles.sass'

class Importancia extends React.Component {
  render() {
    return (
      <div>
        <div className="introduction">
          <h1>Juegos interactivos</h1>
        </div>
        <Colums>
          <div>
            <strong>
              <p>Space Place:</p>
            </strong>
            <p>
              La agencia espacial estadounidense (NASA, por sus siglas en
              inglés), cuenta con una aplicación para que los niños aprendan
              sobre el espacio y la astronomía de forma amena y divertida.
            </p>
            <p>
              La plataforma, Space Place, está disponible en español y contiene
              gran cantidad de herramientas audiovisuales, juegos, actividades y
              "artesanías" que permiten{' '}
              <strong>
                construir mapas topográficos o asteroides comestibles,
              </strong>{' '}
              entre otras muchas cosas.
            </p>
            <p>
              Los usuarios podrán encontrar información sobre fenómenos como la
              materia oscura, los eclipses, los huracanes y datos sobre la
              Tierra y otros planetas de nuestro sistema solar.
            </p>
          </div>
          <img onMouseOver={this.onHover} onMouseOut={this.onOut} src={Image} />
        </Colums>
        <div className="introduction">
          <h1>Juegos de matemáticas para niños de Primaria</h1>
          <p>
            Las matemáticas son fundamentales para la vida porque su comprensión
            permitirá a los pequeños estudiar en el futuro algunas de las
            carreras con mayor número de salidas. No es fácil aprender a
            resolver ejercicios, pero es mucho más divertido cuando las
            matemáticas se aprenden jugando. Y lo que a priori resulta difícil y
            tedioso acaba convirtiéndose en juegos fáciles para niños a medida
            que vayan aprendiendo. Disfruta de los siguientes juegos de
            matemáticas para primaria:
          </p>
        </div>
      </div>
    )
  }
}

export default Importancia
