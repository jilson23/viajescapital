import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import './slide.css';

function Slider({ data }) {
  return (
    <div className="Slider">
      <Splide
        options={{
          rewind: true,
          //   width: 800,
          gap: '1rem',
        }}
      >
        {data.map((dat) => (
          <SplideSlide key={dat.alt}>
            <img src={dat.src} alt={dat.alt} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Slider;
