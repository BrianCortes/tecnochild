  import React from 'react'
  import Image from '../assets/girl.jpeg'
  import './styles.sass'

  class IndexPage extends React.Component {
    render(){
      return(
        <div className="container-general">
            <div className="container-left">
              <h1>LA TECNOLOGIA EN LOS NIÑOS </h1>
              <p>
                Los juegos de barrio, montar en bicicleta y en patines por la cuadra, y
                todas aquellas actividades tan propias de la niñez que están en el
                imaginario de las generaciones que las vivieron, se ven hoy con mayor
                frecuencia reemplazadas por la televisión, las tabletas, los
                videojuegos, el Internet, los teléfonos móviles y otras tecnologías que
                disminuyen considerablemente la actividad motora en los niños, pero que
                a su vez, les permite abrir una ventana al conocimiento en diversos
                temas. Este tema ha puesto en la agenda el debate sobre cómo deben los
                padres afrontar correctamente esta realidad inminente.
              </p>
            </div>
            <div className="container-right">
              <div className="container-image">
                <img onMouseOver={this.onHover} onMouseOut = {this.onOut} src={Image} />
              </div>
            </div>
            <div className="container-video">
              <h1>un pequeña reflexión</h1>
              <iframe width="800" height="500" src="https://www.youtube.com/embed/lyOoHtyyI0U?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
      );
    }
  }

  export default IndexPage
