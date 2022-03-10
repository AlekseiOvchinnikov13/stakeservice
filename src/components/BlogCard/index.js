import './style/style.scss';
import PropTypes from 'prop-types';
import Text from '../Text';

const BlogCard = ({
  data: {
    img,
    date,
    tag,
    title,
    description
  }
}) => {
  return (
    <div className="blog-card-wrapper">
      <img className="blog-card__img" src={img} alt={title}/>
      <div className="blog-card__text-block">
        <div className="row">
          <span className="blog-card__tag">{tag}</span>
          <span className="blog-card__date">{date}</span>
        </div>
        <h5 className="blog-card__title">{title}</h5>
        <Text text={description} isDescription/>
      </div>
      <a href="#">read more</a>
    </div>
  );
};

BlogCard.propTypes = {
  data: PropTypes.object
};

export default BlogCard;