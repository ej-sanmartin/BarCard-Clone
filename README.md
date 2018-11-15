# BarCard Clone


![BarCard Logo](https://github.com/ej-sanmartin/BarCard-Clone/blob/master/assets/images/barcard.png)


## Description
Visit BarCard here and download their app [here](https://www.barcard.co/)!

Created to impress a company to so they'll hire me hahah

This project tested my mobile development and JavaScript skills. Built with React-Native, this app pulls data with Apollo
GraphQL and displays information on various restaurants, clubs, and lounges from NYC. It has aesthetically pleasing photos
of said venues displayed on the screen that, upon tapping a card, takes you to a details page on that locale.


## Requirements
Follow these steps to set up the environment (using the terminal):

- Install NVM (Node Version Manager) with `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`.

- Run `nvm install node` to install the latest version of node.

- You must have the expo-cli to run this project. So run the command `npm install -g expo-cli`.

- Now, if you want to run on an iphone emulator, an easy way to download it is to download XCode if you have a Mac.
If you want to run on an android emulator, the process is a bit longer but you'll just have to download Android Studio
and download an emulator from within there. If you choose to run and test on your mobile device, install the Expo app
from your Google play store or Apple App store.

- Optional but, also, install yarn to be able to access docz documentation.


## How to run
Create a folder to clone this repo to and `cd` into it. Run these commands on your terminal:

- `git clone "https://github.com/ej-sanmartin/BarCard-Clone.git"`

- `cd BarCard-Clone`

- `expo start`

- Now, depending on the emulator you want to to use, in the terminal press 1 of 3 options:

1. `i` to run on an iphone emulator you've installed on your PC

2. `a` if you have an android emulator installed on your PC

3. `e` to send a link to your phone via email or text


To run docz documentation, run this command:

- `yarn docz dev`


#Bugs
1. Bottom Tab not working properly. Home button does not respond. TODO: Look into react-navigation documentation.

2. Docz's PropTable does not display the props. TODO: Utilize Query component from 'react-apollo' instead og HoC.


## Photo Preview

![BarCard Clone Home Screen](https://github.com/ej-sanmartin/BarCard-Clone/blob/master/img/BarCardHomeScreen.jpg)

![BarCard Clone Feed Screen](https://github.com/ej-sanmartin/BarCard-Clone/blob/master/img/BarCardFeedScreen.jpg)

![BarCard Clone Details Screen](https://github.com/ej-sanmartin/BarCard-Clone/blob/master/img/BarCardDetailsScreen.jpg)
