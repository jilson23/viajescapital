import './style.css';
import { Link, Outlet } from 'react-router-dom';

const enlaces = [
  {
    title: 'USA',
    link: './',
  },
  {
    title: 'Canada',
    link: 'canada',
  },
  {
    title: 'China',
    link: 'china',
  },
  {
    title: 'Australia',
    link: 'australia',
  },
  {
    title: 'Reino Unido',
    link: 'reinounido',
  },
  {
    title: 'Nueva Zelanda',
    link: 'nuevazelanda',
  },
];

const Visas = () => {
  return (
    <div className="Visas">
      <div className="Visas__titulo">
        <img src="./SVG/visas.svg" alt="" />
        <h2>Trámites de Visas</h2>
      </div>
      <div className="Visas__button">
        {enlaces.map((enlace) => (
          <Link key={enlace.title} to={enlace.link}>
            {enlace.title}
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Visas;
