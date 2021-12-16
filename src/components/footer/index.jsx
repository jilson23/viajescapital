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
                <a className='phone' href="http:cel">+57 +2 379-9441</a>
            </div>
            <div>
                <a href="facevbool.com">
                    <img src="./SVG/facebook.svg" alt="" />
                </a>
                <a href="facevbool.com">
                    <img src="./SVG/instagram.svg" alt="" />
                </a>
            </div>
            <div>
                <img src="./SVG/mail.svg" alt="" />
                <a href='mail:info@viajescapital.com'>info@viajescapital.com</a>
            </div>
            
        </footer>
    )
}
export default Footer