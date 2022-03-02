import './style.css';
const Download = ({ content, link = 'http://google.com' }) => {
  return (
    <div className="Download">
      <p>
        <a download href={link}>
          {content}
        </a>
      </p>
      <img src="/SVG/download.svg" alt="" />
    </div>
  );
};

export default Download;
