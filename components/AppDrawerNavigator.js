import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyBartersScreen from '../screens/MyBartersScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationScreen';
import { Icon } from 'react-native-elements'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions: {
      drawerIcon: <Icon name = "home" type="font-awesome" />,
    }
  },
  MyBarters:{
    screen : MyBartersScreen,
    drawerIcon: <Icon name = "gift" type="font-awesome" />,
    drawerLabel: "MyBarters",
  },
  Notifications :{
    screen : NotificationScreen,
    drawerIcon: <Icon name = "bell" type="font-awesome" />,
    drawerLabel: "Notifications",
  },
  Setting : {
    screen : SettingScreen,
    drawerIcon: <Icon name = "settings" type="font-awesome" />,
    drawerLabel: "Notifications",
  }
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })