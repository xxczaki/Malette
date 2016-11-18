import { Fetch, Node, Bind, Draw } from '../../xs';
import './style.scss';

const action = {
  download() { alert('YOYO'); }
};

export default () => {
  const $download = document.createElement('download-');

  Fetch([{}])
  .then(Node(() => `
    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  `))
  .then(Bind('svg')('click')(action.download))
  .then(Draw($download));

  return $download;
};