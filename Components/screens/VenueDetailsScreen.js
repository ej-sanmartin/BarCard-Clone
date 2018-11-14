import React from 'react'
import { TouchableOpacity,
         ScrollView,
         View,
         Text,
         Image,
         StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { colors } from '../../constants'

// Query for a single venue
import { getVenueQuery } from '../../queries/queries';

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primary2,
  },
  img: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 14,
    marginBottom: 10,
    marginLeft: 15,
    width: 341,
    height: 150,
  },
  text: {
    flex: 1,
    fontFamily: 'open-sans-regular',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    color: '#fff',
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 4,
    marginBottom: 8,
  },
  textName: {
    fontFamily: 'open-sans-semibold',
    fontSize: 14,
  },
  textNeighborhood: {
    marginTop: -6,
  },
  textCategory: {
    fontFamily: 'open-sans-light'
  },
  textDaysHours: {
    fontFamily: 'open-sans-semibold',
    fontSize: 14,
  },
  textHours: {
    marginTop: 2,
    marginBottom: 2,
  },
  btn: {
    color: '#777',
    marginTop: 70,
    marginBottom: 15,
    marginLeft: 15,
  }
})

// This is the component/ screen that displays selected venue's information
export default class VenueDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: "Details",
    headerStyle: {
      backgroundColor: '#25252e',
    }
  });

  displayVenueDetails(){
    const { navigation } =  this.props;
    const venue = navigation.getParam('venueInfo'); // grabs venue data passed as prop from VenueCardsPage
    const handle = navigation.getParam('handle'); // grabs url from VenueCardsPage
    if(venue && handle){
      return(
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{
              uri: venue && handle,
              cache: 'force-cache',
            }}
          />
        <Text style={[styles.text, styles.textName]}>{venue.name}</Text>
          <Text style={[styles.text, styles.textNeighborhood]}>{venue && venue.neighborhoods[0] && venue.neighborhoods[0].name}</Text>
          <Text style={styles.text}>{venue.address}</Text>
          <Text style={[styles.text, styles.textCategory]}>{venue && venue.category && venue.category.name}</Text>
          <Text style={styles.text}>{venue.description}</Text>
          <Text style={[styles.text, styles.textDaysHours]}>Days | Hours</Text>
          {
            venue.hoursText && venue.hoursText.hoursOpenText.map((hours, key) => {
              return(
                <Text key={key} style={[styles.text, styles.textHours]}>{hours}</Text>
              )
            })
          }
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.btn}>Go Back</Text>
          </TouchableOpacity>
        </View>
      )
    } else { // Handles errors, could style it better but just trying to get this to work
      return(
        <Text style={styles.text}>Sorry, an error has occurred.</Text>
      )
    }
  }

  render(){
    return(
      <ScrollView style={{ backgroundColor: colors.primary2 }}>
        { this.displayVenueDetails() }
      </ScrollView>
    )
  }
}
