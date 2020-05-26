import React from 'react';

import ItemInfo from './ItemInfo';
import Heading from '../Heading';

import './WhatIsNew.scss';

const CN = 'what-is-new';

const WhatIsNew = (props) => {
  const { items } = props;
  const itemsToRender = items.slice(0, 3).sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const block = itemsToRender.map((item) => (
    <ItemInfo className={`${CN}-wrapper__item`} key={item._id} item={item} />
  ));

  return (
    <div className={`content ${CN}`}>
      <Heading className={`${CN}__title}`} title="What is new?" position="center" />
      <div className={`container ${CN}-wrapper`}>
        {block}
      </div>
    </div>
  );
};


export default WhatIsNew;
