// css files can be imported and added to <head>
import '../styles/index.css';

import log from 'loglevel';
log.setLevel('info');

export const main = (): void => {
  log.info('hello world!');
};
