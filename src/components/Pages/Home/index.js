import {PRODUCT_CARDS_ARRAY, SUB_TITLE, TITLE} from '../../../data/home';
import './style/style.scss';
import TopBg from './images/top-bg.svg';
import ProjectViewCard from './-projectViewCard/ProjectViewCard';

const Home = () => {
  const style = {
    height: '50vh'
  };

  return (
    <>
      <section className="top-content home-section section container">
        <p className="top-content__sub-title">{SUB_TITLE}</p>
        <h1 className="top-content__title">{TITLE}</h1>
        <img src={TopBg} alt="top-background" className="top-content__top-background"/>
      </section>
      <section id="project">
        {PRODUCT_CARDS_ARRAY.map(card =>
          <ProjectViewCard key={card.label} card={card}/>
        )}
      </section>
      <section id="about-us" style={style}>about-us</section>
      <section id="blog" style={style}>blog</section>
      <section id="contact" style={style}>contact</section>
    </>
  );
};

export default Home;