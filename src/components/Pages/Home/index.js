import {
  ABOUT_US,
  ABOUT_US_SUBTITLE,
  ABOUT_US_TEXT,
  BLOG,
  BLOG_SUBTITLE,
  CONTACT,
  CONTACT_SUBTITLE,
  CONTACT_TEXT,
  CONTACTS_SUBTITLE,
  OUR_BEGINNING_SUBTITLE,
  OUR_BEGINNING_TEXT,
  OUR_CONTACT,
  RELIABLE_VALIDATOR,
  SUB_TITLE,
  TITLE,
  WHAT_WE_DO,
  WHAT_WE_DO_TEXT
} from '../../../data/home';
import './style/style.scss';
import TopBg from './images/top-bg.svg';
import FooterBg from './images/footer-bg.svg';
import SubTitleBlock from '../../SubTitleBlock';
import TextStroke from '../../TextStroke';
import WhatWeDoBg from './images/what-we-do-bg.svg';
import Fade from 'react-reveal/Fade';
import {useContext} from 'react';
import {CALCULATOR_STROKE_TEXT, CALCULATOR_TITLE} from '../../../data/calculator';
import BlogCard from '../../BlogCard';
import LinkArrow from '../../BlogCard/-LinkArrow';
import {PostsContext} from '../../../context/postsContext';
import {CoinsContext} from '../../../context/CoinsContext';
import Loader from '../../Loader';
import ProjectViewCard from '../../ProjectViewCard';
import Calculator from '../../Calculator';
import ContactForm from '../../ContactForm';
import Contacts from '../../Contacts';

const Home = () => {
  const posts = useContext(PostsContext);
  const coins = useContext(CoinsContext);

  return (
    <>
      <section className="top-content home-section container section-padding">
        <Fade right duration={2000}>
          <p className="top-content__sub-title">{SUB_TITLE}</p>
        </Fade>
        <Fade left duration={2000}>
          <h1 className="top-content__title">{TITLE}</h1>
        </Fade>
        <img src={TopBg} alt="top background" className="top-content__top-background"/>
      </section>
      <section id="project" className="container">
        {coins.length > 0
          ? coins.map(card =>
            <ProjectViewCard key={card.coin} card={card}/>)
          : <Loader/>}
      </section>
      <section id="about-us" className="container section-padding">
        <div className="about-us-block">
          <SubTitleBlock
            label={ABOUT_US}
            title={ABOUT_US_SUBTITLE}
            text={ABOUT_US_TEXT}
            isBlueStick
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
            isBlueStick
          />
          <TextStroke text={WHAT_WE_DO} className="right-up"/>
        </div>
      </section>
      <section id="blog" className="container">
        <div className="blog-header">
          <SubTitleBlock
            label={BLOG}
            Component={LinkArrow}
            isBlueStick
          />
          <TextStroke text={BLOG_SUBTITLE} className="right-center"/>
        </div>
        <div className="blog-cards">
          {posts && posts.slice(6).map(card =>
            <BlogCard data={card} key={card.title}/>
          )}
        </div>
      </section>
      <section id="calculator" className="container">
        <div className="calculator-header">
          <SubTitleBlock
            label={CALCULATOR_TITLE}
            isBlueStick
          />
          <TextStroke text={CALCULATOR_STROKE_TEXT} className="right-bottom"/>
        </div>
        {coins.length > 0
          ? <Calculator/>
          : <Loader/>
        }
      </section>
      <section id="contact" className="container">
        <div className="contact-header">
          <SubTitleBlock
            label={CONTACT}
            text={CONTACT_TEXT}
            isBlueStick
          />
          <TextStroke
            text={CONTACT_SUBTITLE}
            className="right-up"
            isNonCase
          />
        </div>
        <div className="contact-form">
          <ContactForm/>
        </div>
        <div className="contact-footer">
          <SubTitleBlock
            label={OUR_CONTACT}
            isBlueStick
            Component={Contacts}
          />
          <TextStroke
            text={CONTACTS_SUBTITLE}
            className="right-center"
            isNonCase
          />
        </div>
        <img src={FooterBg} alt="footer background" className="contact-footer__background"/>
      </section>
    </>
  );
};

export default Home;