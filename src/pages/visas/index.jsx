import './style.css';
import { Link, Outlet } from 'react-router-dom';

const enlaces = [
  {
    title: 'Visa USA',
    link: './',
  },
  {
    title: 'Visa Canada',
    link: 'canada',
  },
  {
    title: 'Visa China',
    link: 'china',
  },
  {
    title: 'Visa Australia',
    link: 'australia',
  },
  {
    title: 'Visa Reino Unido',
    link: 'reinounido',
  },
  {
    title: 'Visa Nueva Zelanda',
    link: 'nuevazelanda',
  },
  {
    title: 'Pasaporte Colombiano',
    link: 'pasaporte',
  },
];

const Visas = () => {
  return (
    <div className="Visas">
      <div className="Visas__titulo">
        <img src="/SVG/visas.svg" alt="" />
        <h2>Trámites</h2>
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
