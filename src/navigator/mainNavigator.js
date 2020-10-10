import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen012077Navigator from '../features/BlankScreen012077/navigator';
import BlankScreen112076Navigator from '../features/BlankScreen112076/navigator';
import BlankScreen011961Navigator from '../features/BlankScreen011961/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen012077: { screen: BlankScreen012077Navigator },
BlankScreen112076: { screen: BlankScreen112076Navigator },
BlankScreen011961: { screen: BlankScreen011961Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
