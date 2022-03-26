import ReactLoading from 'react-loading';
import './style.scss';

const Loader = () => (
  <div className="loader">
    <ReactLoading type="spin" color="#7ED1FF"/>
  </div>
);

export default Loader;