import './style.css';

const dataPromovacaciones = [
  {
    id: '1',
    title: 'ORLANDO, Florida.',
    image: '/img/orlando.jpeg',
    description:
      'En una ubicación privilegiada junto a los parques temáticos. Destino turístico por excelencia. No cabe duda que Orlando es uno de los lugares para disfrutar realmente de unas vacaciones mágicas, llenas de encanto, glamur y diversión para toda la familia; nos presenta atracciones únicas en Estados Unidos,  pasado por los maravillosos parques temáticos de Disney, Universal Studios, Sea World,  Wet and Wild entre muchos otros, donde la felicidad y el asombro serán la carta de presentación de cada lugar que visite.',
  },
  {
    id: '2',
    title: 'FORT LAUDERDALE en el área de Miami.',
    image: '/img/FORT-LAUDERDALE.jpeg',
    description:
      'La “Venecia” de América, tiene para usted un espléndido listado de playas de arena blanca, mar azul y una fantástica brisa que lo acompañará a lo largo de toda la su estadía en este destino tropical. \n Déjese envolver por las cálidas atenciones, paisajes maravillosos y atardeceres inolvidables. Disfrute junto a su familia de entretenidos días visitando los centros comerciales más pintorescos y grandes del sector, disfrutando de deportes acuáticos, una tarde de buceo y un paseo por las calles con restaurantes con menús exóticos y variados para todos los gustos.',
  },
  {
    id: '3',
    title: 'NUEVO CRUCERO A LAS BAHAMAS',
    image: '/img/grandcelebration-2.jpeg',
    description:
      'Estamos orgullosos de declarar que Holiday Cruise Line ha sido designada como la línea de cruceros oficial de Grand Bahamas Island por el Ministerio del Gobierno de las Bahamas y el ministerio de turismo. Nuestro nuevo crucero insignia el GRAND CELEBRATION, convenientemente sale desde el Puerto de Palm Beach en el sur de la Florida y está previsto que viaje de ida y vuelta a Grand Bahama Island » La joya de las Bahamas», ampliamente considerado como un paraíso tropical, conocida por sus playas vírgenes de arena blanca, aguas cristalinas y un ambiente relajado.',
  },
];

const Promovacaciones = () => {
  return (
    <div className="Promovacaciones-page">
      <div className="Promovacaciones-page__titulo">
        <img src="/SVG/promovaca.svg" alt="" />
        <h2>Promovacaciones</h2>
      </div>
      {dataPromovacaciones.map((plan) => (
        <div key={plan.id} className="Promovacaciones-page__contenedor">
          <div className="Promovacaciones-page__body">
            <img className="Promovacaciones-page__image" src={plan.image} alt="" />
            <div className="Promovacaciones-page__description">
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Promovacaciones;
