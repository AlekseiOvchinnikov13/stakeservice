import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Scrollbar from 'react-scrollbars-custom';

const scrollBarStyles = {
  width: '100%',
  height: '100vh'
};

ReactDOM.render(
  <React.StrictMode>
    <Scrollbar noScrollX style={scrollBarStyles}>
      <App/>
    </Scrollbar>
  </React.StrictMode>,
  document.getElementById('root')
);
