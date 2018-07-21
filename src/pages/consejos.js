import React from 'react'
import Colums from '../components/colums'
import Image from '../assets/mon.jpeg'
import Image1 from '../assets/risa.jpeg'
import Image2 from '../assets/rulo.jpeg'
import Image3 from '../assets/peluche.jpeg'
import './styles.sass'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Colums>
          <div>
            <h1>CONSEJOS</h1>
            <p>
              Estos son algunos consejos para el manejo de las pantallas con los
              Niños.
            </p>
            <ul>
              <li>
                <strong>Ponga límites:</strong> <br /> <br /> Sus hijos
                necesitan y esperan tener límites, por lo que es fundamental
                fijarlos. Además hay que mantenerse al tanto sobre qué tipo de
                plataformas, videojuegos, páginas y aplicaciones visitan, con
                quiénes interactúan virtualmente y cuáles son sus
                comportamientos en la red.
              </li>
            </ul>
          </div>
          <img onMouseOver={this.onHover} onMouseOut={this.onOut} src={Image} />
        </Colums>
        <Colums reverse>
          <div>
            <ul>
              <li>
                <strong>
                  Promueva las zonas libres de dispositivos tecnológicos:
                </strong> <br /> <br /> Restrinja el uso de cualquier tipo de
                tecnología a la hora de las comidas y demás encuentros
                familiares y sociales. Recargue los dispositivos de su hijo
                durante la noche y fuera de la habitación del niño, de esta
                manera evitará la tentación de usarlo cuando debe estar
                durmiendo.
              </li>
            </ul>
          </div>
          <img
            onMouseOver={this.onHover}
            onMouseOut={this.onOut}
            src={Image1}
          />
        </Colums>
        <Colums>
          <div>
            <ul>
              <li>
                <strong>
                  Eduque a sus hijos sobre las reglas básicas de privacidad
                  virtual y las personas malintencionadas que rondan por
                  internet:
                </strong> <br /> <br /> Aunque para algunos padres resulte
                difícil explicarles a los niños sobre los peligros que hay día a
                día en internet, es importante que ellos sepan en detalle con
                qué se pueden encontrar en la red para que tengan claro los
                riesgos que conlleva la delincuencia cibernética. También es
                importante que se les inculque cómo ser una cibernauta
                responsable y consciente.
              </li>
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
            <ul>
              <li>
                <strong>
                  Descarte completamente a la tecnología como técnica
                  pacificadora:
                </strong> <br /> <br /> No cometa el error de calmar las
                reacciones fuertes y los berrinches de sus hijos valiéndose de
                los dispositivos. Si bien estos pueden tranquilizarlos y
                distraerlos, deben considerarse como una de las últimas
                opciones, ya que lo adecuado es enseñarles cómo autocontrolarse,
                a crear diferentes actividades para controlar el aburrimiento, a
                resolver los conflictos a través del diálogo y a encontrar otras
                estrategias para canalizar las emociones.
                <br /> <br />
                <strong>bibliografia: </strong>
                <a href="https://www.semana.com/vida-moderna/articulo/consejos-para-el-uso-de-tecnologia-en-los-ninos/557744">
                  {' '}
                  Mas consejos en www.semana.com
                </a>
              </li>
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
