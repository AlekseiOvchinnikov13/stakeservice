import './style/style.scss';
import PropTypes from 'prop-types';
import Text from '../Text';
import Tag from '../Tag';
import {cleanText, dateTimeToDateFormat} from '../../helpers/helpers';
import LinkArrow from '../LinkArrow';

const BlogCard = (
  {
    data: {
      thumbnail,
      title,
      description,
      link,
      pubDate,
      categories
    }
  }
) => {
  return (
    <div className="blog-card-wrapper">
      <img className="blog-card__img" src={thumbnail} alt={title}/>
      <div className="blog-card__text-block">
        <div className="row">
          {categories &&
            <Tag key={categories[0]} className="blog-card-tag" label={categories[0]}/>
          }
          <span className="blog-card__date">{dateTimeToDateFormat(pubDate)}</span>
        </div>
        <h5 className="blog-card__title">{title}</h5>
        <Text text={cleanText(description)} isDescription/>
        <LinkArrow label="Read more" to={link} className="blog-card__link" isOpenNewPage/>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  data: PropTypes.object
};

export default BlogCard;