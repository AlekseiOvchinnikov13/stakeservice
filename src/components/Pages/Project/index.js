import {useParams} from 'react-router-dom';
import classNames from 'classnames';
import {ProjectsData} from '../../../data/projects';
import {useContext, useEffect, useRef, useState} from 'react';
import {CoinsContext} from '../../../context/CoinsContext';
import Button from '../../Button/Button';
import Loader from '../../Loader';
import TopBg from './images/project-bg.svg';
import './style/style.scss';
import ReadMore from '../../ReadMore';
import InfoCard from '../../InfoCard';
import ArticleCard from '../../ArticleCard';
import SectionTitles from '../../SectionTitles';
import {getCoinInfo} from '../../../api/api';
import Calculator from '../../Calculator';
import {getMainDataByCoinInfo} from '../../../helpers/helpers';

const Project = () => {
  const {projectId} = useParams();
  const coins = useContext(CoinsContext);

  const {data: projectData} = ProjectsData.filter(el => el.projectId === projectId)[0];
  const coinsData = coins.filter(el => el.id === projectId)[0];
  const classes = classNames({[`project-page-${projectId}`]: projectId});

  const [coinInfo, setCoinInfo] = useState({});
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const paragraphReadMoreRef = useRef(null);
  const readMoreClickHandle = () => {
    setIsReadMoreOpen(!isReadMoreOpen);
    paragraphReadMoreRef && paragraphReadMoreRef.current.classList.toggle('text-block__paragraph-hidden');
  };

  useEffect(async () => {
    const tmpData = await getCoinInfo(projectId);
    setCoinInfo(getMainDataByCoinInfo(tmpData));
  }, [projectId]);

  if (!projectData || !coinsData) return <Loader/>;

  return (
    <div className="project-page container">
      <img src={TopBg} alt="background" className="project-page__top-background"/>
      <div className={classes}>
        <div className="project-page__header">
          <div className="header__description-side">
            <a href={coinInfo?.homepage} target="_blank" rel="noreferrer">
              <img src={coinsData.img} alt={coinsData.coinName}/>
            </a>
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
        <div className="project-page__basic-info project-page-section-padding">
          {projectData && projectData.basicInfoList?.map(infoItem =>
            <InfoCard
              key={infoItem.title}
              title={infoItem.title}
              value={infoItem.value}
              isAddress={infoItem.isAddress}
              className="basic-info__item"
            />
          )}
        </div>
        <div className="project-page__tutorial project-page-section-padding">
          <SectionTitles
            title={projectData.stakingTutorialTitle}
            subtitle={projectData.stakingTutorialSubTitle}
            classNameTitle="tutorial__title"
            classNameSubtitle="tutorial__subtitle"
          />
          <div className="tutorial__article-wrapper">
            {projectData.articleLinks?.map(article =>
              <ArticleCard
                data={article}
                key={article.postTitle}
                coinName={coinsData.coinName}
              />
            )}
          </div>
        </div>
        <div className="project-page__mechanics project-page-section-padding">
          <SectionTitles
            title={projectData.stakingMechanicsTitle}
            classNameTitle="mechanics__title"
          />
          <div className="mechanics__info-card-wrapper">
            {Object.entries(coinInfo)
              .filter(el => el[0] !== 'homepage')
              .map(info =>
                <InfoCard
                  title={info[0]}
                  value={info[1]}
                  key={info[0]}
                  className="mechanics-info__item"
                />
              )}
          </div>
        </div>
        <div className="project-page__calculator project-page-section-padding">
          <SectionTitles
            title={projectData.rewardsCalculatorTitle}
            classNameTitle="calculator__title"
            subtitle={projectData.rewardsCalculatorSubTitle}
            classNameSubtitle="calculator__subtitle"
          />
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default Project;