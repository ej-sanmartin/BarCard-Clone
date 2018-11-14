import { createStackNavigator } from 'react-navigation'

// Component screens
import VenueCategoryFeedScreen from "../screens/VenueCategoryFeedScreen"
import VenueDetailsScreen from "../screens/VenueDetailsScreen"

const VenueCategoryNavigatorTab = createStackNavigator(
  {
    Home: {screen: VenueCategoryFeedScreen},
    Details: {screen: VenueDetailsScreen},
  },
  {
    initialRouteName: 'Home'
  }
);

export default VenueCategoryNavigatorTab;
