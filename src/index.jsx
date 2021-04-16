import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import theme from './theme';
import registerServiceWorker from './registerServiceWorker';

window.addEventListener('load', () => {
  registerServiceWorker();
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById('root')
  );
});
