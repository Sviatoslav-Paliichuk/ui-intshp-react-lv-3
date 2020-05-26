import React from 'react';
import { Button } from '@/shared';

import './NotFoundPage.scss';

const goBack = () => {
  window.history.back();
};

const NotFoundPage = () => (
  <div className="page404__wrapper">
    <Button
      className="page404__button"
      onClick={goBack}
    >
        &#60; Return to the previous page
    </Button>
  </div>
);

export default NotFoundPage;
