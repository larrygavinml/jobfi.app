require('./bootstrap');

import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { InertiaProgress } from '@inertiajs/progress'
import '@fortawesome/fontawesome-free/css/all.css';

const el = document.getElementById('app')

render(
  <App
    initialPage={JSON.parse(el.dataset.page)}
    resolveComponent={name => require(`./Pages/${name}`).default}
  />,
  el
);

InertiaProgress.init({ color: '#4B5563' });
