import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { REMOVED_FROM_WISHLIST_NOTIFICATION } from '../../../constants/notificationData';

import './WishlistItem.scss';

const CN = 'wishlist-item';

const WishlistItem = ({
  className,
  item,
  removeFromWishlist,
  showMessage
}) => {
  const {
    _id, images, title, collection, category
  } = item;

  const imageSrc = `${process.env.IMAGE_URL}/${images[0].claudinaryId}`;

  const removeItemFromWishlist = () => {
    removeFromWishlist(_id);
    showMessage(REMOVED_FROM_WISHLIST_NOTIFICATION);
  };

  return (
    <div className={cx(CN, className)}>
      <img className={`${CN}__image`} src={imageSrc} alt={title} />
      <h3 className={`${CN}__title`}>{title}</h3>
      <h4 className={`${CN}__subtitle`}>{collection}</h4>
      <h4 className={`${CN}__subtitle`}>{category}</h4>
      <button type="button" className={`${CN}__button`}>
        <i className="cart small icon col-2" />
        <h4 className="col-8 col-right">Add to cart</h4>
      </button>
      <button
        className={`${CN}__button ${CN}__button--remove`}
        type="button"
        onClick={() => removeItemFromWishlist(_id, REMOVED_FROM_WISHLIST_NOTIFICATION)}
      >
        <i className="icon trash alternate small col-2" />
        <h4 className="col-8 col-right">Remove from wishlist</h4>
      </button>
    </div>
  );
};

WishlistItem.propTypes = {
  item: propTypes.shape({
    image: propTypes.string,
    title: propTypes.string,
    collection: propTypes.string,
    category: propTypes.string
  }).isRequired,
  removeFromWishlist: propTypes.func.isRequired,
  className: propTypes.string,
  showMessage: propTypes.func.isRequired
};

WishlistItem.defaultProps = {
  className: ''
};

export default WishlistItem;
