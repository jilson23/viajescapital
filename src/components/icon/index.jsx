// import icono1 from './SVG/1.svg'
import './style.css'
const Icon = ({enlace, icon, title}) =>{
 return (
    <a href={enlace} className="icon">
        <img src={icon} alt="" />
        <span>{title}</span>
 </a>)
}

export default Icon;
