import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import 'tachyons';
import './index.css';


WebFont.load({
  google: {
    families: ['Roboto Condensed', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
