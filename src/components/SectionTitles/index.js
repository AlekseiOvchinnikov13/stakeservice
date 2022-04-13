import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

const SectionTitles = ({title, subtitle, classNameTitle, classNameSubtitle}) => {
  const classesTitle = classNames('page-section-title', classNameTitle);
  const classesSubtitle = classNames('page-section-subtitle', classNameSubtitle);

  return (
    <>
      <h5 className={classesTitle}>{title}</h5>
      {subtitle && <h6 className={classesSubtitle}>{subtitle}</h6>}
    </>
  );
};

SectionTitles.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  classNameTitle: PropTypes.string,
  classNameSubtitle: PropTypes.string,
};

export default SectionTitles;