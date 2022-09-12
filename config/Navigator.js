import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


import Gay from '../Gay';
import TelaInicial from '../TelaInicial';

const mainNavigation = createBottomTabNavigator({
  Gay,
  TelaInicial,
});

export default createAppContainer(mainNavigation);