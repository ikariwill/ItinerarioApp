import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Location from '~/pages/Location';

const Nav = createStackNavigator(
  { Main, Location },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3D3D3D',
        paddingTop: 26,
      },
      headerTintColor: '#fff',
    },
  },
);

const Routes = createAppContainer(Nav);

export default Routes;
