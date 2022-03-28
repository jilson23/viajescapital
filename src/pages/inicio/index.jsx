import './style.css';
import Card from '../../components/card';
import Reservas from '../../components/reservas';
import Whapptrip from '../../components/whapptrip';
import Slider from '../../components/slider';
import data from './data';
import hotels from './hotels';
import cruises from './cruises';
import RedBank from '../../components/redBank';

function Inicio() {
  return (
    <div className="Inicio">
      <div className="Inicio__cards">
        {data.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            image={card.image}
            titleCard={card.titleCard}
            subTitleCard={card.subTitleCard}
            body={card.body}
            link={card.link}
          />
        ))}
      </div>
      <Reservas />
      <Whapptrip />
      <hr className="green" />
      <h2>Cadenas Hoteleras Aliadas</h2>
      <Slider data={hotels} />
      <h2>Trabajamos con estos cruceros</h2>
      <Slider data={cruises} />
      <RedBank />
    </div>
  );
}

export default Inicio;
