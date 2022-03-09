import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style/style.scss';
import Arrow from './images/arrow-right.svg';

const ProjectViewCard = ({
  card: {
    img,
    label,
    percent,
    isSoon,
    rewardText,
    exploreText,
    isWithArrow,
    link
  }
}) => {
  return (
    <div className="project-view-card">
      <img src={img} alt={label} className="project-view-card__img"/>
      <p className="project-view-card__label">{label}</p>
      {!isSoon && <p
        dangerouslySetInnerHTML={{
          __html: percent
        }}
        className="project-view-card__percent"
      />}
      {!isSoon && <span className="project-view-card__reward">{rewardText}</span>}
      {isSoon && <p className="project-view-card__soon">soon</p>}
      <NavLink to={link} className="project-view-card__link">
        {exploreText}
        {isWithArrow && <img src={Arrow} alt="arrow"/>}
      </NavLink>
    </div>
  );
};

ProjectViewCard.propTypes = {
  card: PropTypes.object.isRequired
};

export default ProjectViewCard;