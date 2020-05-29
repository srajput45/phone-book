import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './common/common.css';

import PhoneBook from './PhoneBook';

ReactDOM.render(<PhoneBook />, document.getElementById('root'));
serviceWorker.unregister();
