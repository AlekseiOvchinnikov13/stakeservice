import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

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
      <img src={img} alt={label}/>
      <p>{label}</p>
      {!isSoon && <p>{percent}</p>}
      {!isSoon && <span>{rewardText}</span>}
      <NavLink to={link}>{exploreText}{isWithArrow}</NavLink>
    </div>
  );
};

ProjectViewCard.propTypes = {
  card: {
    img: PropTypes.element.isRequired,
    projectName: PropTypes.string.isRequired,
    percent: PropTypes.string,
    isSoon: PropTypes.bool.isRequired,
    rewardText: PropTypes.string,
    exploreText: PropTypes.string,
    isWithArrow: PropTypes.bool,
    link: PropTypes.string,
    card: PropTypes.object
  }
};

export default ProjectViewCard;