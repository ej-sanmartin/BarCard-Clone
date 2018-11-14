import { reactNative } from 'docz-plugin-react-native'
import { colors } from './constants'

export default {
  title: 'BarCard Clone',
  themeConfig: {
    colors: {
      primary: colors.pink,
    }
  },
  plugins: [reactNative()]
}
