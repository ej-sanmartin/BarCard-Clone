import React from 'react'
import { ScrollView,
         ActivityIndicator,
         ImageBackground,
         Image,
         Text,
         StyleSheet,
         View,
         TouchableOpacity } from 'react-native'
import { graphql, compose } from 'react-apollo'
import { colors } from '../../constants'

// For type validation and to display data to PropTable component from .mdx file
import PropTypes from 'prop-types'

// Queries
import { getVenuesQuery } from '../../queries/queries'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primary2,
    paddingLeft: 2,
  },
  loader: {
    flex: 1,
    alignSelf:'center'
  },
  text: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 15,
    marginBottom: 4
  },
  textTitle: {
    fontFamily: 'open-sans-regular',
    color: '#fff',
    fontSize: 14
  },
  textNeighborhood: {
    fontFamily: 'open-sans-light',
    color: '#fff',
    fontSize: 10
  },
  venueCard: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    width: 341,
    height: 150
  },
})

class VenueCardsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <Image source={require('../../assets/images/barcard.png')} />
    ),
    headerStyle: {
      backgroundColor: '#25252e',
    }
  });

  // maps through query data and passes those objects to child component as props
  venueCards(){
    // console.log(this.props);
    // stores querie result into a variable
    var venueData = this.props.getVenuesQuery;
    if(venueData.loading){ // handles loading
      return (
        <ActivityIndicator style={styles.loader} size="large" color={colors.pink} />
      )
    } else if (venueData.error) { // handles errors
        return (
          <Text>{venueData.error.message}</Text>
        )
    } else {
      return venueData.allVenues.map(venue => {
        // stores photo uri in a variable
        let handle = `https://cdn.filestackcontent.com/resize=w:300/compress/${venue.photos && venue.photos[0] && venue.photos[0].handle}`;
        return (
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Details', {
              venueInfo:venue,
              handle:handle
            })
          }}
          key={venue.id}
          >
            <ImageBackground
              key={venue.id}
              style={styles.venueCard}
              source={{
                uri: venue.photos && venue.photos[0] && handle,
                cache: 'force-cache',
              }}
              >
              <View style={styles.text}>
                <Text style={styles.textTitle}>{venue.name}</Text>
                <Text style={styles.textNeighborhood}>{venue.neighborhoods && venue.neighborhoods[0] && venue.neighborhoods[0].name}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )
      })
    }
  }

  render() {
		return (
      <View style={styles.container}>
			  <ScrollView>
          {this.venueCards()}
        </ScrollView>
      </View>
		)
	}
}

export default compose(
  graphql(getVenuesQuery, {name: 'getVenuesQuery'})
)(VenueCardsScreen);

VenueCardsScreen.propTypes = {
  /* From React-Navigation, allows navigation between this screen and VenueDetailsScreen */
  navigation: PropTypes.shape(
    {
      actions: PropTypes.objectOf(PropTypes.func),
      goBack: PropTypes.func,
      navigate: PropTypes.func,
    }
  ),
  /* From GraphQL query, an object of data about the venues | had to comment out or docz page will throw an error
  getVenuesQuery: PropTypes.shape(
    loading: PropTypes.bool,
    // allVenues: PropTypes.arrayOf(propTypes.shape(
      // id: PropTypes.string,
      // name: PropTypes.string,
      // address: PropTypes.string,
      // description: PropTypes.string,
      // hoursText: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
      // category: PropTypes.objectOf(PropTypes.string),
      // neighborhoods: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
      // photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    // ))
  )
  */
};
