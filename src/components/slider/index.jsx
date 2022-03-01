import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import './style.css';

function Slider({ data }) {
  return (
    <div className="Slider">
      <Splide
        className="Slider__Splide"
        options={{
          rewind: true,
          perPage: 5,
          gap: '1rem',
          breakpoints: {
            500: {
              perPage: 2,
              gap: '1rem',
            },
            768: {
              perPage: 3,
              gap: '2rem',
            },
          },
        }}
      >
        {data.map((dat) => (
          <SplideSlide key={dat.alt}>
            <img className="Slider__image" src={dat.src} alt={dat.alt} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Slider;
