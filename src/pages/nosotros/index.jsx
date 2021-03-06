import './style.css';
import TituloLinea from '../../components/tituloLinea';
import Titleimage from '../../components/titleImage';
import Download from '../../components/download';
import { Link, Outlet } from 'react-router-dom';

const enlaces = [
  {
    title: 'Normatividad',
    link: 'normatividad',
  },
  {
    title: 'Políticas',
    link: 'politicas',
  },
  {
    title: 'Sostenibilidad',
    link: 'sostenibilidad',
  },
  {
    title: 'Protocolo de Bioseguridad',
    link: 'protocolo',
  },
];

function Nosotros() {
  return (
    <div className="Nosotros">
      <div className="Nosotros__titulo">
        <img src="/SVG/ourshome.svg" alt="" />
        <h2>Nosotros</h2>
      </div>
      <img className="Nosotros__image" src="./img/girl-beach.jpg" alt="" />
      <p>
        Somos una Oficina de Turismo basada en la Eficiencia y transparencia de todos
        nuestros servicios, siendo siempre eficaces en todas las fases en las que se
        compone un Viaje.
      </p>
      <TituloLinea titulo="¿Cómo trabaja Viajes Capital?" />
      <p>
        Trabajamos con nuestro equipo humano altamente calificado en servicio real
        diseñando viajes a tu medida.
      </p>
      <img className="Nosotros__image" src="./img/cuple-beach.jpg" alt="" />
      <hr className="green" />
      <h3>¿Por qué asesoramos sus vacaciones?</h3>
      <p>
        Definitivamente nos encanta Viajar es nuestra pasión y por ello día a día
        diseñamos los mejores programas con la referencia de las maravillosas experiencias
        de nuestros viajeros.
      </p>
      <img className="Nosotros__image" src="./img/compass.jpg" alt="" />
      <TituloLinea titulo="Nuestra Misión" />

      <p>
        Definitivamente nos encanta Viajar es nuestra pasión y por ello día a día
        diseñamos los mejores programas con la referencia de las maravillosas experiencias
        de nuestros viajeros.
      </p>
      <img className="Nosotros__image" src="./img/hourglass.jpg" alt="" />
      <TituloLinea titulo="Nuestra Visión" />
      <p>
        Para el 2025 ser los Mayores referentes de Turismo Nacional destacándonos por la
        Efectividad de Nuestros Servicios, trayendo bienestar a nuestro equipo humano.
      </p>
      <Titleimage title="Nuestra Normatividad" image="./img/hammer-lawyer.jpg" />
      <p>
        Rechazamos la explotación, la pornografía, el turismo sexual y demás formas de
        abuso sexual con menores. Contribuimos al cumplimiento de la ley 679 de 2001, y la
        ley 1336 de 2009. Nos acogemos a la Ley 17 y 1333 para evitar el tráfico ilegal de
        especies de flora y fauna. Ley 63 1986, Ley 1185 de 2008 para evitar el tráfico de
        bienes culturales. Nos acogemos a la resolución 0584 de 2002 por la cual se
        declaran y protegen las especies silvestres amenazadas en el territorio nacional.
      </p>
      <div className="grid2">
        <Download
          content="Ver Registro Nacional de Turismo Cali"
          link="../document/registrontcali.pdf"
        />
        <Download
          content="Ver Registro Nacional de Turismo Palmira"
          link="../document/registrontpalmira.pdf"
        />
      </div>

      <div className="Nosotros__buttons">
        {enlaces.map((enlace) => (
          <Link key={enlace.title} to={enlace.link}>
            {enlace.title}
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
}
export default Nosotros;
