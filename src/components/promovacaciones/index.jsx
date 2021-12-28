import './style.css'
import { Link } from 'react-router-dom'
const Promovacaciones = () => {
    return(
        <div className="Promovacaciones">
            <h2>Promovacaciones</h2>
            <div className="Promovacaciones__contenedor">
            <div className="Promovacaciones__card">
                <div className="Promovacaciones__header">
                    <img src="./SVG/promovaca.svg" alt="" />
                    <div className="Promovacaciones__titulos">
                        <h3>Una Promoción nunca antes vista!!</h3>
                        <h4>Todo incluido x el precio de uno</h4>
                    </div>
                </div>
                <div className="Promovacaciones__body">
                    <p>8 Noches / 9 días - 3 días en Miami, 5 días en Orlando, Crucero por las Bahamas por tan solo $1.450 Usd</p>
                    <Link className="Promovacaciones__link" to='/promovacaciones'>Ver más</Link>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Promovacaciones;