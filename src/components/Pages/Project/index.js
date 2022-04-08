import {useParams} from 'react-router-dom';
import classNames from 'classnames';
import {ProjectsData} from '../../../data/projects';
import {useContext, useRef, useState} from 'react';
import {CoinsContext} from '../../../context/CoinsContext';
import Button from '../../Button/Button';
import Loader from '../../Loader';
import TopBg from './images/project-bg.svg';
import './style/style.scss';
import ReadMore from '../../ReadMore';

const Project = () => {
  const {projectId} = useParams();
  const coins = useContext(CoinsContext);

  const {data: projectData} = ProjectsData.filter(el => el.projectId === projectId)[0];
  const coinsData = coins.filter(el => el.id === projectId)[0];
  const classes = classNames({[`project-page-${projectId}`]: projectId});

  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const paragraphReadMoreRef = useRef(null);
  const readMoreClickHandle = () => {
    setIsReadMoreOpen(!isReadMoreOpen);
    paragraphReadMoreRef && paragraphReadMoreRef.current.classList.toggle('text-block__paragraph-hidden');
  };

  if (!projectData || !coinsData) return <Loader/>;

  return (
    <div className="project-page container">
      <img src={TopBg} alt="background" className="project-page__top-background"/>
      <div className={classes}>
        <div className="project-page__header">
          <div className="header__description-side">
            <img src={coinsData.img} alt={coinsData.coinName}/>
            <div className="header__text-block">
              <h4 className="text-block__title">{coinsData.coinName}</h4>
              <p
                className="text-block__paragraph"
                dangerouslySetInnerHTML={{
                  __html: projectData.description1
                }}
              />
              <p
                ref={paragraphReadMoreRef}
                className="text-block__paragraph text-block__paragraph-hidden"
                dangerouslySetInnerHTML={{
                  __html: projectData.description2
                }}
              />
              <ReadMore
                isOpen={isReadMoreOpen}
                onClick={readMoreClickHandle}
              />
            </div>
          </div>
          <div className="header__stake-side">
            <div className="stake-side__top-info-block">
              <div className="top-info-block__item">
                <span className="top-info-block__active-text"
                  dangerouslySetInnerHTML={{
                    __html: coinsData.percent
                  }}
                />
                <span className="top-info-block__text">{coinsData.rewardText}</span>
              </div>
              <div className="top-info-block__item">
                <span className="top-info-block__active-text"
                  dangerouslySetInnerHTML={{
                    __html: projectData.stakingCommissionValue
                  }}
                />
                <span className="top-info-block__text">{projectData.stakingCommissionTitle}</span>
              </div>
            </div>
            <Button
              label={'Stake Now'}
              onClick={() => {
              }}
              className={'stake-side__stake-button'}
            />
            <div className="stake-side__bottom-info-block">
              <span className="bottom-info-block__text">
                {projectData.totalStakeTitle} {projectData.totalStakeValue}
              </span>
              <span className="bottom-info-block__text">
                {projectData.delegatorsTitle} {projectData.delegatorsValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;