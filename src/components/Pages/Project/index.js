import {useParams} from 'react-router-dom';
import classNames from 'classnames';
import {ProjectsData} from '../../../data/projects';
import {useContext, useEffect, useRef, useState} from 'react';
import {CoinsContext} from '../../../context/CoinsContext';
import Button from '../../Button/Button';
import Loader from '../../Loader';
import TopBg from './images/project-bg.svg';
import ReadMore from '../../ReadMore';
import InfoCard from '../../InfoCard';
import ArticleCard from '../../ArticleCard';
import SectionTitles from '../../SectionTitles';
import {getCoinInfo} from '../../../api/api';
import Calculator from '../../Calculator';
import {getMainDataByCoinInfo, isMobile, sliceArrayByCount} from '../../../helpers/helpers';
import './style/style.scss';

const Project = () => {
  const {projectId} = useParams();
  const coins = useContext(CoinsContext);

  const {data: projectData} = ProjectsData.filter(el => el.projectId === projectId)[0];
  const coinsData = coins.filter(el => el.id === projectId)[0];
  const classes = classNames({[`project-page-${projectId}`]: projectId});

  const [mechanicsList, setMechanicsList] = useState([]);
  const [coinInfo, setCoinInfo] = useState({});
  const [isParagraphOpen, setParagraphOpen] = useState(false);
  const [isMechanicsOpen, setMechanicsOpen] = useState(false);
  const paragraphReadMoreRef = useRef(null);

  const paragraphReadMoreClickHandle = () => {
    setParagraphOpen(!isParagraphOpen);
    paragraphReadMoreRef && paragraphReadMoreRef.current.classList.toggle('text-block__paragraph-hidden');
  };
  const mechanicsReadMoreClickHandle = () => {
    setMechanicsOpen(!isMechanicsOpen);
  };

  useEffect(async () => {
    const tmpData = await getCoinInfo(projectId);
    setCoinInfo(getMainDataByCoinInfo(tmpData));
  }, [projectId]);

  useEffect(() => {
    const list = Object.entries(coinInfo).filter(el => el[0] !== 'homepage');
    isMobile()
      ? isMechanicsOpen
        ? setMechanicsList(list)
        : setMechanicsList(sliceArrayByCount(4, list))
      : setMechanicsList(list);
  }, [isMobile(), coinInfo, isMechanicsOpen]);

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
              {projectData.description2 &&
                <>
                  <p
                    ref={paragraphReadMoreRef}
                    className="text-block__paragraph text-block__paragraph-hidden"
                    dangerouslySetInnerHTML={{
                      __html: projectData.description2
                    }}
                  />
                  <ReadMore
                    isOpen={isParagraphOpen}
                    onClick={paragraphReadMoreClickHandle}
                  />
                </>}
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
                {projectData.delegatorsTitle} {projectData.delegatorsValue ? projectData.delegatorsValue : '-'}
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
            title={`${coinsData.coinName} ${projectData.stakingTutorialTitle}`}
            subtitle={projectData.stakingTutorialSubTitle}
            classNameTitle="tutorial__title"
            classNameSubtitle="tutorial__subtitle"
          />
          <div className="tutorial__article-wrapper">
            {projectData.articleLinks?.map(article =>
              <ArticleCard
                data={article}
                key={`${article.postTitle}${coinsData.coinName}`}
                coinName={coinsData.coinName}
              />
            )}
          </div>
        </div>
        <div className="project-page__mechanics project-page-section-padding">
          <SectionTitles
            title={`${coinsData.coinName} ${projectData.stakingMechanicsTitle}`}
            classNameTitle="mechanics__title"
          />
          <div className="mechanics__info-card-wrapper">
            {mechanicsList && mechanicsList.map(info =>
              <InfoCard
                title={info[0]}
                value={info[1]}
                key={info[0]}
                className="mechanics-info__item"
              />
            )}
            {isMobile() &&
              <ReadMore
                isOpen={isMechanicsOpen}
                onClick={mechanicsReadMoreClickHandle}
                className="mechanics-info__see-all"
              />
            }
          </div>
        </div>
        <div className="project-page__calculator project-page-section-padding">
          <SectionTitles
            title={`${coinsData.coinName} ${projectData.rewardsCalculatorTitle}`}
            classNameTitle="calculator__title"
            subtitle={`${projectData.rewardsCalculatorSubTitle} ${coinsData.coinName.toLowerCase()}?`}
            classNameSubtitle="calculator__subtitle"
          />
          <Calculator projectId={projectId}/>
        </div>
      </div>
    </div>
  );
};

export default Project;