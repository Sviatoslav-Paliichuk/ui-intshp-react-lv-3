import { connect } from 'react-redux';

import WhatIsNew from './WhatIsNew';

const mapStateToProps = ({ productsReducer }) => ({
  items: productsReducer.products
});

export default connect(mapStateToProps)(WhatIsNew);
