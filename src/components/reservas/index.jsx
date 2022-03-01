import Icon from '../icon';
import './style.css';

const reservas = [
  {
    enlace: 'http://reservas.viajescapital.com/buscar/vuelos/',
    icono: '/SVG/1.svg',
    title: 'Vuelos',
  },
  {
    enlace: 'http://reservas.viajescapital.com/buscar/multi/',
    icono: '/SVG/2.svg',
    title: 'Paquetes',
  },
  {
    enlace: 'http://reservas.viajescapital.com/buscar/hoteles/',
    icono: '/SVG/3.svg',
    title: 'Hoteles',
  },
  {
    enlace: 'http://reservas.viajescapital.com/buscar/buses/',
    icono: '/SVG/4.svg',
    title: 'Buses',
  },
  {
    enlace: 'http://reservas.viajescapital.com/buscar/paquetes/',
    icono: '/SVG/5.svg',
    title: 'Vacaciones',
  },
  {
    enlace: 'http://reservas.viajescapital.com/buscar/autos/',
    icono: '/SVG/6.svg',
    title: 'Autos',
  },
  {
    enlace: 'http://reservas.viajescapital.com/buscar/experiencias/',
    icono: '/SVG/7.svg',
    title: 'Experiencias',
  },
  {
    enlace: 'http://reservas.viajescapital.com/buscar/cruceros/',
    icono: '/SVG/8.svg',
    title: 'Cruceros',
  },
  {
    enlace: 'http://reservas.viajescapital.com/buscar/seguros-de-viaje/',
    icono: '/SVG/9.svg',
    title: 'Asistencias',
  },
];

const Reservas = () => {
  return (
    <>
      <a href="http://reservas.viajescapital.com/" className="titulo-reserva">
        <img src="/SVG/date.svg" alt="" />
        <h1> Reservas</h1>
      </a>
      <div className="reservas">
        {reservas.map((reserva) => {
          return (
            <Icon
              key={reserva.enlace}
              enlace={reserva.enlace}
              icon={reserva.icono}
              title={reserva.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default Reservas;
