import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    //marginBottom: -SIZES.xSmall,
    marginHorizontal: SIZES.small
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontFamily: 'semiBold',
    fontSize: SIZES.xLarge - 2
  }
})

export default styles
