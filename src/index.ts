import { App } from 'vue';
import * as components from './components';

import './assets/main.css';

function install(app: App) {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key as keyof typeof components]);
  });
}

export default { install };

export * from './components';
export * from './constants';
export * from './utils';
