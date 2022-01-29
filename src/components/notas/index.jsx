import './style.css';

const Notas = ({ children, color = 'blue' }) => {
    const style = {
        blue: 'Notas',
        green: 'Notas Notas--green',
        white: 'Notas Notas--white',
    };

    return <div className={style[color]}>{children}</div>;
};

export default Notas;
