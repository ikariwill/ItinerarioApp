import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Review from "./pages/Review";

const Nav = createStackNavigator(
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

const Routes = createAppContainer(Nav);

export default Routes;
