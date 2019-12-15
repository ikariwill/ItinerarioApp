import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Review from "./pages/Review";

const NavStack = createStackNavigator(
  { Main, Review },
  {
    headerLayoutPreset: "center",
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#3D3D3D",
        paddingTop: 26
      },
      headerTintColor: "#fff"
    }
  }
);

const Nav = createSwitchNavigator({
  Login: { screen: Login },
  Logged: {
    screen: NavStack
  }
});

const Routes = createAppContainer(Nav);

export default Routes;
