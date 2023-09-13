import { StyleSheet } from 'react-native'
import { SIZES } from '../../constants'

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    paddingTop: SIZES.xxLarge + 15,
    marginHorizontal: SIZES.small
  }
})

export default styles
