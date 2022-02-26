import './style.css';
import Card from '../../components/card';
import Reservas from '../../components/reservas';
import Whapptrip from '../../components/whapptrip';
import data from './data';

function Inicio() {
  return (
    <div className="Inicio">
      <Reservas />
      <Whapptrip />
      <div className="Inicio__cards">
        {data.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            titleCard={card.titleCard}
            subTitleCard={card.subTitleCard}
            body={card.body}
            link={card.link}
          />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Inicio;
