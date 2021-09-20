import './styles/style.scss';

import logo from './assets/images/webpack.svg';
import {test} from './utils/utils';

/* Example */

function component() {
  const element = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const contact = document.createElement('div');

  h1.innerHTML = ['Webpack', 'Start', 'App'].join(' ');
  h1.classList.add('hello');

  p.innerHTML = 'Hi, this small build on webpack v5 will help create any front-end application';

  const myIcon = new Image();
  myIcon.src = logo;

  contact.innerHTML = `
    <ul class="contacts">
      <li>github: <a href="//github.com/resetus/webpack-start-app">webpack-start-app</a></li>
      <li>author: <a href="//github.com/resetus">resetus</a></li>
    </ul>
  `.trim();

  element.appendChild(myIcon);
  element.appendChild(h1);
  element.appendChild(p);
  element.appendChild(contact);

  return element;
}

document.body.appendChild(component());

test();
