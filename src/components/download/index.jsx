import './style.css'
const Download = ({content}) =>{
    return(
        <div className="Download">
           <p>{content}</p>
           <img src="../SVG/download.svg" alt="" />
        </div>
    )
}

export default Download