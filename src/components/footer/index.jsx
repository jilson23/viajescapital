import './style.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/SVG/location.svg" alt="" />

        <span>
          <h4>Dirección</h4>
          Avenida 5a Norte # 25n-18, local 11 piso 2 / C.C. CaliCentro Norte Cali -
          Colombia
        </span>
      </div>
      <div>
        <img src="/SVG/phonecall.svg" alt="" />
        <span className="phone">
          <a href="tel:+576023799441">PBX: +57 602 379 9441</a> <br />
          <a href="tel:+573168468279">CEL: +57 316 846 8279</a>
        </span>
      </div>
      <div>
        <a href="https://www.facebook.com/viajescapital">
          <img src="/SVG/facebook.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/viajescapital/">
          <img src="/SVG/instagram.svg" alt="" />
        </a>
        <a href="https://www.youtube.com/channel/UCU8HIpaT276V-lwFd2bYOQQ">
          <img src="/SVG/youtube.svg" alt="" />
        </a>
        <a href="https://www.tiktok.com/@viajescapital">
          <img src="/SVG/tiktok.svg" alt="" />
        </a>
      </div>
      <div>
        <img src="/SVG/mail.svg" alt="" />
        <a href="mailto:reservas@viajescapital.com">reservas@viajescapital.com</a>
      </div>
    </footer>
  );
};
export default Footer;
