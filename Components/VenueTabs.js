import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

// Color constants
import { colors } from '../constants'

// Component tabs
import VenueNavigatorTab from './tabs/VenueNavigatorTab'
import VenueCategoryNavigatorTab from './tabs/VenueCategoryNavigatorTab'

// Creating and configuring the bottom tab
const VenueTabs = createBottomTabNavigator(
  {
    Home: VenueNavigatorTab,
    Feed: VenueCategoryNavigatorTab,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName === 'Home'){
          iconName = 'ios-home';
        } else if(routeName === 'Feed'){
          iconName = 'ios-beer';
        }

        return <Icon style={{ paddingTop: 5 }} name={iconName} color={tintColor} size={26} />;
      },
    }),
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.teal,
      style: {
        height: 38,
        backgroundColor: '#25252e',
        paddingVertical: 2,
        paddingHorizontal: 30,
      }
    }
  },
);

export default VenueTabs;
