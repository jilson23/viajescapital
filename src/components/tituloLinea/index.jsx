import './style.css'
const TituloLinea = ({titulo}) =>{
    return(
    <div className="TituloLinea">
        <h2 className="TituloLinea__titulo">{titulo}</h2>
        <span className="TituloLinea__linea"></span>
    </div>
    )
}
export default TituloLinea