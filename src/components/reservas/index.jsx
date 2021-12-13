import Icon from '../icon'
import './style.css'

const reservas = [
    {
        enlace:'https://google.com',
        icono: './SVG/1.svg',
        title:'1'
    },
    {
        enlace:'google2.com',
        icono: './SVG/2.svg',
        title:'1'
    },
    {
        enlace:'google2.com',
        icono: './SVG/3.svg',
        title:'1'
    }
];

const Reservas = ( ) => {
    return(
    <>
        <h1>Reservas</h1>
        <div className='reservas'>
            
            {
                reservas.map( (reserva) => {    
                    return (
                        <Icon
                        key={reserva.enlace}
                        enlace={reserva.enlace}
                        icon={reserva.icono}
                        title={reserva.title}
                        />
                    )
                    }
                )
            }
        </div>
    </>
    )
}

export default Reservas