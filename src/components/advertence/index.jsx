import './style.css';
const Advertence = ({ content }) => {
  return (
    <div className="Advertence">
      <img src="./SVG/warning.svg" alt="" />
      <p>{content}</p>
    </div>
  );
};

export default Advertence;
