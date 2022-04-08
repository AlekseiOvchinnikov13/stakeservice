import './style/style.scss';
import TextStroke from '../../TextStroke';
import {BLOG, BLOG_SUBTITLE} from '../../../data/common';
import topBg from './images/blog-top-bg.svg';
import SubTitleBlock from '../../SubTitleBlock';
import Categories from '../../Categories';
import {useContext, useEffect, useState} from 'react';
import BlogCard from '../../BlogCard';
import {PostsContext} from '../../../context/postsContext';
import classNames from 'classnames';

const Blog = () => {
  const posts = useContext(PostsContext);
  const [activeCategories, setActiveCategories] = useState([]);
  const [activePosts, setActivePosts] = useState(posts);

  const classesWrapperCard = classNames(
    'blog-page__content',
    {'blog-page__content-secondary': activePosts?.length <= 4}
  );

  const addCategory = cat => {
    setActiveCategories(activeCategories.concat(cat));
  };

  const delCategory = cat => {
    setActiveCategories(activeCategories.filter(el => el !== cat));
  };

  const getActivePosts = () => {
    const res = posts.reduce((acc, item) => {
      const cardCategories = item.categories;
      if (cardCategories.some(cat => activeCategories.includes(cat))) {
        acc.push(item);
      }
      return acc;
    }, []);
    setActivePosts(res);
  };

  useEffect(() => {
    if (activeCategories.length === 0) {
      setActivePosts(posts);
    } else {
      getActivePosts();
    }
  }, [activeCategories, posts]);

  return (
    <div className="blog-page container">
      <img src={topBg} alt="blog top background" className="blog-page__top-bg"/>
      <div className="blog-page__header">
        <div className="blog-page__header-left-wrapper">
          <SubTitleBlock title={BLOG} isBlueStick/>
          <Categories
            addHandle={addCategory}
            delHandle={delCategory}
          />
        </div>
        <TextStroke text={BLOG_SUBTITLE}/>
      </div>
      <div className={classesWrapperCard}>
        {activePosts && activePosts.map(card =>
          <BlogCard data={card} key={card.title}/>
        )}
      </div>
    </div>
  );
};

export default Blog;