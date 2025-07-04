/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Enable react-native-screens for better performance
import {enableScreens} from 'react-native-screens';
enableScreens();

AppRegistry.registerComponent(appName, () => App);
