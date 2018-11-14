import { createStackNavigator } from 'react-navigation'

// Component screens
import VenueCardsScreen from "../screens/VenueCardsScreen"
import VenueDetailsScreen from "../screens/VenueDetailsScreen"

const VenueNavigatorTab = createStackNavigator(
  {
    Home: {screen: VenueCardsScreen},
    Details: {screen: VenueDetailsScreen},
  },
  {
    initialRouteName: 'Home'
  }
);

export default VenueNavigatorTab;
