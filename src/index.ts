// css files can be imported and added to <head>
import '../styles/index.css';
// images can be imported and used
import logo from '../assets/typescript.png';

import log from 'loglevel';
log.setLevel('info');

export const main = (): void => {
  log.info('hello world!');

  document.body.appendChild(logo);
};
