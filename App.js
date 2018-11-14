import React from 'react'
import  { Font } from 'expo'
import { Text } from 'react-native'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// Navigation Component
import VenueTabs from "./Components/VenueTabs"

// Apollo client setup
const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/paperhorn-gull-359'
});

export default class App extends React.Component {
	state = {
    fontLoaded: false,
  }

  componentDidMount() {
		// To allow app to use OpenSans font
    Font.loadAsync({
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    }).then( () => this.setState({ fontLoaded: true }));
  }

	render() {
		// Checks if font is loaded before rendering the App
		if(!this.state.fontLoaded){
			return (
				<Text>Loading...</Text>
			)
		}
		return (
			<ApolloProvider client={client}>
				<VenueTabs />
			</ApolloProvider>
		)
	}
}
