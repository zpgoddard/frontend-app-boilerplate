import './tamagui.config'; // Load Tamagui config first so createTamagui/setConfig run before any Tamagui components.

import { registerRootComponent } from 'expo';
import App from './src/App';

registerRootComponent(App);
