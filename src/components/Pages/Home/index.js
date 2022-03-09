import {
  ABOUT_US,
  ABOUT_US_SUBTITLE,
  ABOUT_US_TEXT,
  OUR_BEGINNING_SUBTITLE,
  OUR_BEGINNING_TEXT,
  PRODUCT_CARDS_ARRAY,
  RELIABLE_VALIDATOR,
  SUB_TITLE,
  TITLE,
  WHAT_WE_DO,
  WHAT_WE_DO_TEXT
} from '../../../data/home';
import './style/style.scss';
import TopBg from './images/top-bg.svg';
import ProjectViewCard from './-projectViewCard/ProjectViewCard';
import SubTitleBlock from '../../SubTitleBlock';
import TextStroke from '../../TextStroke';
import WhatWeDoBg from './images/what-we-do-bg.svg';

const Home = () => {

  return (
    <>
      <section className="top-content home-section section container">
        <p className="top-content__sub-title">{SUB_TITLE}</p>
        <h1 className="top-content__title">{TITLE}</h1>
        <img src={TopBg} alt="top background" className="top-content__top-background"/>
      </section>
      <section id="project" className="container">
        {PRODUCT_CARDS_ARRAY.map(card =>
          <ProjectViewCard key={card.label} card={card}/>
        )}
      </section>
      <section id="about-us" className="container">
        <div className="about-us-block">
          <SubTitleBlock
            label={ABOUT_US}
            title={ABOUT_US_SUBTITLE}
            text={ABOUT_US_TEXT}
            className="blue-stick"
          />
          <TextStroke text={ABOUT_US} className="right-center"/>
        </div>
        <div className="reliable-validator">
          <img src={WhatWeDoBg} alt="what we do background" className="reliable-validator__background"/>
          <TextStroke
            text={RELIABLE_VALIDATOR}
            className="center"
            isUpperCase
          />
          <SubTitleBlock
            title={OUR_BEGINNING_SUBTITLE}
            text={OUR_BEGINNING_TEXT}
            className="subtitle-block-right"
          />
        </div>
        <div className="what-we-do">
          <SubTitleBlock
            label={WHAT_WE_DO}
            text={WHAT_WE_DO_TEXT}
            className="blue-stick"
          />
          <TextStroke text={WHAT_WE_DO} className="right-up"/>
        </div>

      </section>
      {/*<section id="blog"></section>*/}
      {/*<section id="contact"></section>*/}
    </>
  );
};

export default Home;