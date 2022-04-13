import PropTypes from 'prop-types';
import './style/style.scss';
import Arrow from './images/arrow-right.svg';

const ArticleCard = ({
  data: {
    articleTitle,
    articleSubtitle,
    postTitle,
    siteLink,
    siteText,
    sourceLink,
    sourceText,
    img,
    isSoon
  },
  coinName
}) => {

  return (
    <div className="article-card">
      <div className="article-card__header">
        <img className="article-card__img" src={img} alt={postTitle}/>
        <div className="article-card__text-wrapper">
          <h6 className="article-card__article-title">{articleTitle}</h6>
          <p className="article-card__article-subtitle">
            {articleSubtitle ? articleSubtitle : coinName}
          </p>
        </div>
      </div>
      <div className="article-card__content">
        <p className="article-card__post-title">{!isSoon ? postTitle : 'Soon'}</p>
        <a className="article-card__source" href={siteLink} target="_blank" rel="noreferrer">
          {siteText}
        </a>
        {!isSoon &&
          <a className="article-card__link" href={sourceLink} target="_blank" rel="noreferrer">
            {sourceText}
            <img src={Arrow} alt="arrow"/>
          </a>}
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  data: PropTypes.object,
  coinName: PropTypes.string,
};

export default ArticleCard;