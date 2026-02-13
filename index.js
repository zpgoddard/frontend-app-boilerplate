// Load Tamagui config first so createTamagui/setConfig run before any Tamagui components.
// Required for web to avoid "Can't find Tamagui configuration".
import './tamagui.config';

import { registerRootComponent } from 'expo';
import App from './src/App';

registerRootComponent(App);
