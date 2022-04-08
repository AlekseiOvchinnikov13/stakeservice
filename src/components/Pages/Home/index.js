import {
  ABOUT_US,
  ABOUT_US_SUBTITLE,
  ABOUT_US_TEXT,
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
  WHAT_WE_DO_TEXT,
} from '../../../data/home';
import './style/style.scss';
import TopBg from './images/top-bg.svg';
import FooterBg from './images/footer-bg.svg';
import WhatWeDoBg from './images/what-we-do-bg.svg';
import Fade from 'react-reveal/Fade';
import ProjectViewCard from '../../ProjectViewCard';
import Loader from '../../Loader';
import {useContext, useEffect, useState} from 'react';
import {CoinsContext} from '../../../context/CoinsContext';
import {isMobile, sliceArrayByCount} from '../../../helpers/helpers';
import ReadMore from '../../ReadMore';
import {BLOG, BLOG_SUBTITLE, READ_MORE_TEXT_SEE_ALL_CLOSE, READ_MORE_TEXT_SEE_ALL_OPEN} from '../../../data/common';
import SubTitleBlock from '../../SubTitleBlock';
import TextStroke from '../../TextStroke';
import Calculator from '../../Calculator';
import {CALCULATOR_STROKE_TEXT, CALCULATOR_TITLE} from '../../../data/calculator';
import Contacts from '../../Contacts';
import ContactForm from '../../ContactForm';
import LinkArrow from '../../LinkArrow';
import {PostsContext} from '../../../context/postsContext';
import BlogCard from '../../BlogCard';

const Home = () => {
  const [isProjectWrapperOpen, setIsProjectOpen] = useState(false);

  const coins = useContext(CoinsContext);
  const [coinsArray, setCoinsArray] = useState([]);

  const posts = useContext(PostsContext);
  const [countPosts, setCountPosts] = useState(0);

  useEffect(() => {
    isMobile()
      ? isProjectWrapperOpen
        ? setCoinsArray(coins)
        : setCoinsArray(sliceArrayByCount(4, coins))
      : setCoinsArray(coins);
  }, [coins, isMobile(), isProjectWrapperOpen]);

  useEffect(() => {
    window.innerWidth > 1366
      ? setCountPosts(4)
      : window.innerWidth > 1050
        ? setCountPosts(3)
        : window.innerWidth > 750
          ? setCountPosts(2)
          : setCountPosts(1);
  });

  return (
    <>
      <section className="top-content home-section container">
        <Fade right duration={2000}>
          <p className="top-content__sub-title">{SUB_TITLE}</p>
        </Fade>
        <Fade left duration={2000}>
          <h1 className="top-content__title">{TITLE}</h1>
        </Fade>
        <img src={TopBg} alt="top background" className="top-content__top-background"/>
      </section>
      <section id="project" className="container">
        <div className="project-cards-wrapper">
          {coinsArray.length > 0
            ? coinsArray.map(card =>
              <ProjectViewCard key={card.coin} card={card}/>)
            : <Loader/>}
        </div>
        {isMobile() &&
          <ReadMore
            onClick={() => setIsProjectOpen(!isProjectWrapperOpen)}
            textClose={READ_MORE_TEXT_SEE_ALL_CLOSE}
            textOpen={READ_MORE_TEXT_SEE_ALL_OPEN}
            isOpen={isProjectWrapperOpen}
          />}
      </section>
      <section id="about-us" className="container">
        <div className="about-us-block">
          <SubTitleBlock
            label={ABOUT_US}
            title={ABOUT_US_SUBTITLE}
            text={ABOUT_US_TEXT}
            isBlueStick
          />
          {!isMobile() &&
            <TextStroke text={ABOUT_US} className="right-center"/>
          }
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
            className={!isMobile() ? 'subtitle-block-right' : ''}
            isBlueStick={isMobile()}
          />
        </div>
        <div className="what-we-do">
          <SubTitleBlock
            label={WHAT_WE_DO}
            text={WHAT_WE_DO_TEXT}
            isBlueStick
          />
          {!isMobile() &&
            <TextStroke text={WHAT_WE_DO} className="right-up"/>
          }
        </div>
      </section>
      <section id="blog" className="container">
        <div className="blog-header">
          <SubTitleBlock
            label={BLOG}
            Component={LinkArrow}
            isBlueStick
          />
          {!isMobile() &&
            <TextStroke text={BLOG_SUBTITLE} className="right-center"/>
          }
        </div>
        <div className="blog-cards">
          {posts && sliceArrayByCount(countPosts, posts).map(card =>
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
          {!isMobile() &&
            <TextStroke text={CALCULATOR_STROKE_TEXT} className="right-bottom"/>
          }
        </div>
        {coins.length > 0
          ? <Calculator/>
          : <Loader/>
        }
      </section>
      <section id="contact" className="container">
        {!isMobile() && <img src={FooterBg} alt="footer background" className="contact-footer__background"/>}
        <div className="contact-header">
          <SubTitleBlock
            label={CONTACT}
            text={CONTACT_TEXT}
            isBlueStick
          />
          {!isMobile() &&
            <TextStroke
              text={CONTACT_SUBTITLE}
              className="right-up"
              isNonCase
            />
          }
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
          {!isMobile() &&
            <TextStroke
              text={CONTACTS_SUBTITLE}
              className="right-center"
              isNonCase
            />
          }
        </div>
      </section>
    </>
  );
};

export default Home;