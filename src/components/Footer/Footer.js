import React from 'react';
import cx from 'classnames';

import ContactDetails from './ContactDetails';
import Linklist from './Linklist';
import config from '../../../config';
import JoinUs from '../JoinUs';
import GoogleMap from '../GoogleMap';

import './Footer.scss';

export const CN = 'footer';

const Footer = () => {
  const { linkListItems, paymentIcons, linkListItemsTablet } = config;
  const { guide, help } = linkListItems;

  const renderIconsList = () => (
    <ul className={`${CN}__payment`}>
      {paymentIcons.map(({ name, link }) => (
        <li key={name}>
          <a href={link}>
            <i className={`${name} icon big`} />
          </a>
        </li>
      ))}
    </ul>
  );

  const renderTabletLinks = () => (
    <ul className={`${CN}__section content ${CN}-tablet`}>
      {linkListItemsTablet.map(({ link, title }) => (
        <li key={title} className={`${CN}-tablet__link`}>
          <a href={link}>
            <h4 className={`${CN}__text`}>{title}</h4>
          </a>
        </li>
      ))}
    </ul>
  );

  const renderBlog = () => (
    <div className={`${CN}__section col-6`}>
      <h3 className={`${CN}__title ${CN}__title--main`}>Twitter</h3>
      <p className={`${CN}__text`}>
      check out the new upcoming phone !! #Valentine’s Day #Australia
        <a
          className={`${CN}__text ${CN}__link`}
          href="http://t.co/StOrIs63bd"
        >
        http://t.co/wRye6rBElN
        </a>
          - 7 hours ago
      </p>
      <p className={`${CN}__text`}>
      your solution partner:
        <a
          className={`${CN}__text ${CN}__link`}
          href="http://t.co/StOrIs63bd"
        >
        http://t.co/StOrIs63bd
        </a>
      #IT #websitedevlopment - 8 hours ago
      </p>
    </div>
  );

  return (
    <div className={cx(CN)}>
      <div className={`container content ${CN}__desktop`}>
        <div className="col-9">
          <div className="container">
            <div className={`${CN}__section col-3`}>
              <Linklist links={guide} />
            </div>
            <div className={`${CN}__section col-3`}>
              <Linklist links={help} />
            </div>
            {renderBlog()}
          </div>
          <div className="container">
            <div className={`${CN}__section col-5`}>
              <h3 className={`${CN}__title ${CN}__title--main`}>About us</h3>
              <p className={`${CN}__text`}>
                One could refuse to pay expensive translators, the European
                languages are members of the same family. Their separate
                existence is a myth. Uses read more
              </p>
            </div>
            <div className={`${CN}__section col-6 col-right`}>
              <div className="container">
                <div className="col-5">
                  <GoogleMap
                    id="myMap"
                    options={{ center: { lat: 49.8397, lng: 24.0297 }, zoom: 10 }}
                    onMapLoad
                  />
                </div>
                <div className="col-6 col-center">
                  <h3 className={`${CN}__title ${CN}__title--main`}>Store location</h3>
                  <p className={`${CN}__text`}>
                    Company ltd.co 234 Fake address name, Fake city name,
                    Country 01234 (000) 123 456 xxx
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${CN}__section col-3`}>
          <h3 className={`${CN}__title ${CN}__title--main`}>Facebook</h3>
          <img
            alt="facebook window"
            className={`${CN}__image`}
            src="src/assets/img/content/facebook.png"
          />
        </div>
      </div>
      {renderTabletLinks()}
      <div className={`content ${CN}__info ${CN}__connect`}>
        <JoinUs />
        <ContactDetails title="Connect us" />
      </div>
      <div className={`content ${CN}__info`}>
        <div className="col-6">
          <h4 className={`${CN}__text`}>
            © 2016 The shop. All rights reserved.
          </h4>
        </div>
        <div className="col-right">
          {renderIconsList()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
