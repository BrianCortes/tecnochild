import React from 'react'
import Colums from '../components/colums'
import Image from '../assets/ipad.jpeg'
import Image1 from '../assets/soccer.jpeg'
import './styles.sass'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <div className="introduction">
          <h1>RELACIONES Y DESARROLLO</h1>
          <p>
            De acuerdo con Luisa Cotto, educadora con maestría en tecnología
            instruccional, residente en Miami y quien trabaja en jardines
            infantiles con niños desde los 3 hasta los 5 años, en estas edades
            son fundamentales las relaciones directas con los demás, pues es a
            través de ellas como los pequeños aprenden a vivir, conocer su
            entorno y alcanzar su desarrollo.
          </p>
          <p>
            Así, explica la experta, la tecnología no debe reemplazar la
            interacción con sus pares, sino acercarlos de manera ingeniosa.
            Además -advierte a los padres-, el juego con tabletas, computadores
            y celulares nunca debe ser un premio o un reconocimiento para el
            niño, sino que hay que hacerles entender que dichos elementos son
            “un medio para relacionarse con el mundo, aprender, acceder a un mar
            de conocimientos y contactarse, no el fin en sí mismo”. (Puedes
            leer: Aprovecha la tecnología para aprender de ciencia)
          </p>
        </div>
        <Colums>
          <div>
            <p>
              Los resultados del trabajo de la University of Washington también
              revelaron que menos de la mitad de las mamás y solo un cuarto de
              los papás consultados llevaban a su hijo a caminar o jugar al
              patio o el parque, al menos una vez al día.
            </p>
            <p>
              Al respecto, la doctora Luque dice que “la falta de deporte puede
              ser realmente perjudicial para la salud, y para el desarrollo
              social, físico y emocional de los niños. Investigaciones
              científicas muestran un claro vínculo entre el no juego libre y la
              depresión, la ansiedad y la inseguridad”.
            </p>
          </div>
          <img onMouseOver={this.onHover} onMouseOut={this.onOut} src={Image} />
        </Colums>
        <Colums reverse>
          <div>
            <p>
              En esa medida, la ausencia de juego en la vida de un niño tiene
              serias repercusiones en su desarrollo general, que van desde
              retrasos hasta dificultades psicológicas. Paula Bernal, psicóloga
              infantil, señala que “a través del juego los bebés aprenden sobre
              la causa y el efecto, así como a relacionarse con los demás.
              Además, cuando los adultos juegan con ellos, les comunican lo
              importantes que son y que siempre estarán ahí para ellos”.
            </p>
            <p>
              El juego, ya sea a manera de canto, lectura, conversaciones,
              juegos de palabras, contacto físico, juguetes y juegos
              tradicionales, permite que los pequeños se adapten y actúen en su
              entorno. Les ayuda también a entender y aprender sobre el
              funcionamiento de su entorno. “No jugar afecta notoriamente los
              procesos en diferentes esferas del desarrollo del afecto, la
              socialización, el lenguaje, la cognición, los sentidos y la
              motricidad”, puntualiza Bernal.
            </p>
            <br />
            <p>
              <strong>Bibliografia: </strong>
              <a href="http://www.abcdelbebe.com/nino/educacion-y-estimulacion/juegos-infantiles-o-tecnologia-beneficios-de-cada-una-para-los-ninos-11877">
                {' '}
                Aqui
              </a>
            </p>
          </div>
          <img
            onMouseOver={this.onHover}
            onMouseOut={this.onOut}
            src={Image1}
          />
        </Colums>
      </div>
    )
  }
}

export default IndexPage
