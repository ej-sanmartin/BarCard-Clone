import React from 'react'
import { View,
         Text,
         Image,
         ScrollView,
         ImageBackground,
         ActivityIndicator,
         TouchableOpacity,
         StyleSheet } from 'react-native'
import { graphql, compose } from 'react-apollo'
import { colors } from '../../constants'

// Queries
import { getCategoriesQuery } from '../../queries/queries'

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primary2,
  },
  venueCard: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    width: 341,
    height: 150
  },
  loader: {
    flex: 1,
    alignSelf:'center'
  },
  text: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontFamily: 'open-sans-regular',
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 15,
    marginBottom: 4,
    marginTop: 20
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
})

class VenueCategoryFeedScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <Image source={require('../../assets/images/barcard.png')} />
    ),
    headerStyle: {
      backgroundColor: '#25252e',
    }
  });

  displayHorizontalFeed(){
    var categoryData = this.props.getCategoriesQuery;
    if(categoryData.loading){ // handles loading
      return (
        <ActivityIndicator style={styles.loader} size="large" color={colors.pink} />
      )
    } else {
      // Each individual venue card
      return categoryData.allCategories.map(category => {
        // takes in grapql data and navigation props
        function displayFeedItems(data, navigate){
          let venueData = data.category;
          return venueData.venues.map(venue => {
            let handle = `https://cdn.filestackcontent.com/resize=w:300/compress/${venue && venue.photos[0] && venue.photos[0].handle}`;
            return (
              <TouchableOpacity onPress={() => {
                  navigate.navigate('Details', {
                    venueInfo:venue,
                    handle:handle
                  })
                }}
                key={venue.id}
              >
                <ImageBackground
                  style={styles.venueCard}
                  source={{
                    uri: venue && venue.photos && venue.photos[0] && handle,
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

        return (
          // Each category row
          <View key={category.id}>
            <Text style={styles.text}>{category.name}</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
                {displayFeedItems({category}, this.props.navigation)}
            </ScrollView>
          </View>
        )
      })
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView scrollEventThrottle={16}>
          {this.displayHorizontalFeed()}
        </ScrollView>
      </View>
    )
  }
}

export default compose(
  graphql(getCategoriesQuery, {name: 'getCategoriesQuery'})
)(VenueCategoryFeedScreen);
