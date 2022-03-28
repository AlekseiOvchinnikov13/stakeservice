import './style.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer container">
      <h2>STAKE SERVICE &copy;&nbsp;{currentYear}</h2>
    </footer>
  );
};

export default Footer;