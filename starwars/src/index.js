import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Orbitron', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();