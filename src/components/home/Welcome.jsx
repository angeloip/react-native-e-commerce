import { Text, View } from 'react-native'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
        Find The Most
      </Text>
      <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
        Luxurious Furniture
      </Text>
    </View>
  )
}

export default Welcome
