import {CATEGORIES_TITLE} from '../../data/blog';
import {getAllCategories} from '../../helpers/helpers';
import Tag from '../BlogCard/-Tag';
import PropTypes from 'prop-types';
import './style/style.scss';

const Categories = ({addHandle, delHandle}) => {
  return (
    <div className="categories">
      <p>{CATEGORIES_TITLE}</p>
      {getAllCategories().map(cat =>
        <Tag
          key={cat}
          isFilter
          label={cat}
          addHandle={addHandle}
          delHandle={delHandle}
          className="categories-tag"
        />
      )}
    </div>
  );
};

Categories.propTypes = {
  addHandle: PropTypes.func,
  delHandle: PropTypes.func,
};

export default Categories;