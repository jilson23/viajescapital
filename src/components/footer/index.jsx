import './style.css'

const Footer = () =>{
    return(
        <footer>
            <div>
                <img src="./SVG/location.svg" alt="" />
                
                <span>
                <h4>Dirección</h4>
                Avenida 5 a Norte # 25n -18, local 11 piso 2 / C.C. CaliCentro Norte Cali - Colombia</span>
            </div>
            <div>
                <img src="./SVG/phonecall.svg" alt="" />
                <span>+57 +2 379-9441</span>
            </div>
            <div>
                <img src="./SVG/facebook.svg" alt="" />
                <img src="./SVG/instagram.svg" alt="" />
            </div>
            <div>
                <img src="./SVG/mail.svg" alt="" />
                <p>info@viajescapital.com</p>
            </div>
            
        </footer>
    )
}
export default Footer