import './style.css';
const TituloLinea = ({ titulo, wrap = false }) => {
    let style = 'TituloLinea__titulo';
    if (wrap) {
        style = 'TituloLinea__titulo--wrap';
    }
    return (
        <div className="TituloLinea">
            <h2 className={style}>{titulo}</h2>
            <span className="TituloLinea__linea"></span>
        </div>
    );
};
export default TituloLinea;
