import './style.css';

const small = './img/waptrip.jpg';
// const medium = './img/waptrip.jpg';
const large = './img/wapptrip2.jpg';

const Whapptrip = () => {
  return (
    <div className="whapptrip">
      <h2>Asesoría gratuita personalizada</h2>
      <h3>Vuelos, hoteles, Visas, millas, Check-in</h3>
      {/* <img src={small} srcSet={`${small} 410w, ${large} 1200w`} alt="wapptrip" /> */}
      <img src={small} srcSet={`${small} 500w, ${large} 1200w`} alt="wapptrip" />
      <a href="https://web.whatsapp.com/send?phone=573168468279&text=%27,%20%27">
        Pregunta
      </a>
    </div>
  );
};

export default Whapptrip;
