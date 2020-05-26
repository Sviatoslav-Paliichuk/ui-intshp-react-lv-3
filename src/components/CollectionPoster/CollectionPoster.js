import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './CollectionPoster.scss';

export const CN = 'poster';

const CollectionPoster = (props) => {
  const { category } = props;
  const posterInfo = {
    man: {
      id: 2,
      category: 'men',
      title: 'new collection 2019',
      description: 'sweater collection'
    },
    woman: {
      id: 1,
      category: 'women',
      title: 'new collection 2019',
      description: 'sweater collection'
    },
    kids: {
      id: 3,
      category: 'kids',
      title: 'new collection 2019',
      description: 'warm autumn'
    }
  };

  return (
    <div
      className={`${cx(CN)} container`}
      style={{
        backgroundImage: `url(src/assets/img/productListPage/${category}.jpg)`
      }}
    >
      <div className={`${CN}__info`}>
        <h1 className={`${CN}__info-title`}>{posterInfo[category].title}</h1>
        <p className={`${CN}__info-description`}>{posterInfo[category].description}</p>
      </div>
    </div>
  );
};

export default CollectionPoster;

CollectionPoster.propTypes = {
  category: PropTypes.string.isRequired
};
