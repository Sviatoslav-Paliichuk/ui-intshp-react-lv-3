import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ItemInfo.scss';

const ItemInfo = ({ item, className }) => {
  const {
    images,
    title,
    collection,
    category
  } = item;
  const imageSrc = `${process.env.IMAGE_URL}/${images[0].claudinaryId}`;

  return (
    <div className={cx('col-4', 'item', className)}>
      <div className="item__img-wrapper">
        <img className="item__img" alt={title} src={imageSrc} />
        <span className="item__category">
          shop
          {category}
        </span>
      </div>
      <div className="item__title-wrapper">
        <h4 className="item__title">{title}</h4>
        <span className="item__collection">
          {collection}
          Hot collection
        </span>
      </div>
    </div>
  );
};

ItemInfo.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string
};

ItemInfo.defaultProps = {
  className: ''
};

export default ItemInfo;
