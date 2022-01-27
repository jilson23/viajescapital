import './style.css'

const Notas = ({contenido, color='blue' }) =>{

    const style = {
        blue: 'Notas',
        green: 'Notas Notas--green',
        white: 'Notas Notas--white'
    }

    return (
        <div className={style[color]}>
            {contenido}
        </div>
    )
}

export default Notas;