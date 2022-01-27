import './style.css'
import { Link } from 'react-router-dom'
const Card = ({ title, titleCard, subTitleCard, body, link }) => {
    return(
        <div className="Card">
            <h2>{title}</h2>
            <div className="Card__contenedor">
            <div className="Card__card">
                <div className="Card__header">
                    <img src="./SVG/promovaca.svg" alt="" />
                    <div className="Card__titulos">
                        <h3>{titleCard}</h3>
                        <h4>{subTitleCard}</h4>
                    </div>
                </div>
                <div className="Card__body">
                    <p>{body}</p>
                    <Link className="Card__link" to={link}>Ver más</Link>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Card;