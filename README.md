# BarCard Development Interview

## Introduction

This project is designed to gauge your ability to contribute to application development workflow at BarCard. Our stack is a bit opinionated, but it aims to enhance developer experience, developer velocity, and enable us to ship products and iterations more quickly.

We are attempting to simulate a similar workflow you might experience at BarCard. We will be providing some mockups/designs, a mock GraphQL API, and some constraints we'll need you to follow.

Some of the exercises will build off of each other, so it's important you follow them in order. For some of the exercises we will give you a choice of options, and as a 'bonus' we'd like you to complete the additional exercises if you feel you can.

Technologies that will be used during this are [React](https://reactjs.org/), [React Native](https://facebook.github.io/react-native/), [Apollo Client](https://www.apollographql.com/docs/react/), and [React Navigation](https://reactnavigation.org/).

## Overview

This exercise will consist of 5 parts. The first four are mandatory, and the last one is optional.

1. [Venue Feed Components](#1-venue-feed-components)
2. [Venue Feed with Apollo](#2-venue-feed-with-apollo)
3. [Additional Page with React Navigation](#3-additional-page-with-react-navigation)
4. [Documentation](#4-documentation)
5. [Bonuses](#5-bonuses)

There are also [Submission Instructions](#submission) and an [FAQ](#faq).
<br>
<br>

## Exercises

### 1. Venue Feed Components

Reference the designs in `./designs`, and **build the screen and it's respective components**.

- There should be a **Header component, a Venue Card component, and some sort of view container where the user can scroll through the list of venue cards.**
- You should use mock data for now, a sample venue photo can be found in `/assets/images/BeautyEssexPhoto.jpg`
- The BarCard logo is available in the same directory. It is an svg, but you can treat it like a normal image.
- Once we have this working, we can move on to the next step where we wire it up to the database/API.

Notes:

- You can use any font of our choosing (i.e. the default system font), but for a bonus you can incorporate **Open Sans**
- I did my best to notate the designs, the only thing that may be unclear is the width & height of the elements. If you look at the upper right portion of the screenshot, you should see W & H numbers. The Venue Card, for example, is 341px x 150px. If anything is unclear, shoot me a message!

### 2. Venue Feed with Apollo

Take a look at the [Apollo Client docs](https://www.apollographql.com/docs/react/), and familiarize yourself with the sample API provided. You may also need to familiarize yourself with some of the GraphQL basics, like Queries.

- **Incorporate `react-apollo` into the app, query a list of all the venues, and display the results in vertical feed in the app.**
- The schema for the API is provided in the FAQ's below, and you can access an interactive schema explorer & playground by entering the URL in a browser.
- **The query should return ~68 venues, please display them alphabetically from A-Z.**
- **Ensure we are using a loading indicator when the data is loading**, the default `ActivityIndicator` from React Native is fine.

Notes:

- `react-apollo` may require you to install some additional dependences (`apollo-boost`, `graphql`)
- You can test out writing queries in the Playground / Web Browser before implementing them in the app. This is a good way to familiarize yourself with GraphQL before implementing Apollo.

### 3. Additional Page with React Navigation

Take a look at the [React Navigation docs](https://reactnavigation.org/docs/en/api-reference.html), and familiarize yourself with the some of the basic API's (`createStackNavigator` & `createBottomTabNavigator`). **Build one of the following**:

1. **A Venue Page**

- When the user clicks a card, they are brought to this page. Show the basic info available like feature photo, name, neighborhood, category, and description. Adding the hours is not necessary but would be a nice plus. Ensure the user is able to go back to the previous page after navigating here.

2. **An additional Venue Feed**

- Create a second tab (use anything you'd like for the icons, or no icons at all), and have it display our netflix-like feed. This would be ~8 rows (1 for each category), where the user can swipe/scroll horizontally to view more items in the list.

Notes:

- Don't go crazy with the designs, that's not what we're testing here. We are looking to see if you are able to pick up / use the react-navigation API.
- As a bonus we'd like you to complete both of these items, and we'd ultimately rather you build both of the pages than add cool designs here.

### 4. Documentation

There's a library called `docz` that's pretty neat ([link](https://github.com/pedronauck/docz)). It can be added to an existing React or React Native project, and allows us to easily document our components. Some libraries trying to solve a similar problem are `Styleguidist` and `Storybook`.

- Take a look at the [react-native example](https://github.com/pedronauck/docz-plugin-react-native/tree/master/example), and implement it into your current project.
- **Document the Venue Card component we made back in Step 1, and ensure the documentation displays in the web browser when you run the `docz dev` script.**

Notes:

- No need to go too crazy here, but you should use the `<Playground />` and `<PropsTable />` components in your implementation
- This will require you to install external dependencies. Please follow the instructions required. You may also need to update your scripts in package.json.

### 5. Bonuses

1. Use Open Sans instead of the default system fonts
2. Make sure this works on iPhone 6/7/8 Plus devices (the current designs are only for iPhone 6/7/8, but assume all views & layouts scale up linearly based on the device width)
3. Make sure this also works on Android devices\*
4. Write a 'tracking function' that logs an event to the console (console.log()) each time a venue card appears on the screen.\*\*

\* Don't kill yourself trying to install an Android emulator. If you are having difficulty, I would test out the code on Expo Snack.

\*\* Also don't kill yourself on this one, but we're looking for here is something that fires only when the Venue Card comes into view. If the user only scrolls a little and sees 10 cards on the screen, we'd expect there to only be 10 console.log statements.

## Submission

Your submission will made using this git repository. Please commit each step separately, i.e. after making the venue card "1. - created venue card". We are not going to assess your individual commits, but want to ensure you are properly utilizing git and not just submitting one giant commit at the end.

If you get stuck on anything and wanted to show your progress, please feel free to push those commit(s) to a separate branch (i.e. android-implementation)

When you feel your project is ready, merge your commits to master and send us an email.

## FAQ

<details>
  <summary>How do I set up my development environment?</summary>
    <ol>
      <li>We reccomend using NVM (Node Version Manger) https://github.com/creationix/nvm</li>
      <li>To install or update nvm, use the following script:</li>
      <pre> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash</pre>
      <li>With nvm, you can easily install and manage different versions of node. Use `nvm install node` to get the latest version, or `nvm install 8.70` to install a specific vesion. Type `nvm ls` to see the list of versions installed. And `node -v` to see the version you are currently using</li>
      <li>To set a default version, you can use the command `nvm alias default 8.70`</li>
      <li>The install script should create a symlink in your .bash_profile (or .profile, .bashrc, etc). If you are experiencing issues, the README.md for nvm should be able to assist you.</li>
      <li>You will also need the expo-cli. After nvm is installed, you can install it using:</li>
      <pre>npm install -g expo-cli</pre>
      <li>You can find more instructions here: https://github.com/react-community/create-react-native-app#quick-overview</li>
    </ol>
</details>
<details>
  <summary>What versions of React and React Native should I use?</summary>
    <ul>
      <li>This project is set up to use React 16.5.x and React Native 0.57.x, so you shouldn't have to adjust anything.</li>
      <li>If you are experiencing issues getting the initial app to launch, shoot me a message and I'll help you get set up.</li>
    </ul>
</details>
<details>
<summary>What are React Native and React Native Web?</summary>
    <ul>
      <li>React Native is a library developed by Facebook that creates universal UI Components that target native iOS (Objective-C) and Android (Java) API's.</li>
      <li>React Native Web is library developed by the Twitter Mobile team that aims to take the idea a bit further, and extend the API to target HTML/DOM API's. With this approach, presential components can be written once and utilized on multiple platforms.</li>
      <li>Examples of these componotes are View (UIView in iOS, View in Android, div in HTML), ScrollView (UIScrollView in iOS, ScrollView in Android, and a div with overflow in HTML).</li>
    </ul>
</details>
<details>
  <summary>What is Expo, and do I need to use it?</summary>
    <ul>
      <li>Expo is an open-source project that helps developers build React Native apps. While Facebook and the React Native aims to cover UI components, Expo fills some of the gaps 0</li>
      <li>This project was bootstrapped with `create-react-native-app`, a starter kit that has recently been depreciated but was mainted by the Facebook team. Facebook's reccomended way for getting with React Native is to bootstrap a project with Expo, so that's what we are doing here.</li>
      <li>You probably won't need to use any of the Expo API's for exercises in this project, but one or two of the bonus ones may require you to use an Expo API.</li>
      <li>BarCard does not currently use Expo for our React Native app, so I wouldn't spin your wheels too much learning the Expo API's. We rely heavily on the React Native API's, so I would spend the bulk of your time on those.</li>
    </ul>
</details>
<details>
  <summary>Do I need to use any external libraries?</summary>
    <ul>
      <li>Outside of React and React Native, you should not need to use any external libraries. If an external library is required, it will be mentioned explicity in the directions. The beauty of React's limited surface area is that is forces developers to write good JavaScript, and that's a skill we're looking for.</li>
      <li>If you feel you need to use an additional external library, please go ahead and do so.</li>
    </ul>
</details>
<details>
  <summary>I heard something about a GraphQL schema?</summary>
  Yup, here it is:

```gql
type Category @model {
	bcAdminId: String @isUnique
	createdAt: DateTime!
	id: ID! @isUnique
	name: String! @isUnique
	updatedAt: DateTime!
	venues: [Venue!]! @relation(name: "VenueCategory")
}

type Neighborhood @model {
	bcAdminId: String @isUnique
	coords: Json
	createdAt: DateTime!
	geoloc: Json
	id: ID! @isUnique
	name: String! @isUnique
	updatedAt: DateTime!
	venues: [Venue!]! @relation(name: "VenuesInNeighborhood")
}

type Venue @model {
	bcAdminId: String @isUnique
	address: String
	category: Category @relation(name: "VenueCategory")
	createdAt: DateTime!
	description: String
	geoloc: Json
	hoursText: Json
	id: ID! @isUnique
	intlPhoneNumber: String
	name: String!
	neighborhoods: [Neighborhood!]! @relation(name: "VenuesInNeighborhood")
	phoneNumber: String
	photos: [VenuePhoto!]! @relation(name: "VenuePhotos")
	updatedAt: DateTime!
	website: String
}

type VenuePhoto @model {
	bcAdminId: String @isUnique
	createdAt: DateTime!
	feature: Boolean
	filename: String
	gallery: Boolean
	handle: String @isUnique
	mimetype: String
	size: Int
	id: ID! @isUnique
	profile: Boolean
	updatedAt: DateTime!
	url: String
	venue: Venue @relation(name: "VenuePhotos")
}
```

</details>
