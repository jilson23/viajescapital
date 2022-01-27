import './style.css'

const Titleimage = ({title, image}) =>{
    return(
        <div className="Titleimage">
            <h1>{title}</h1>
            <img src={image} alt="" />
        </div>
    )
}
export default Titleimage