import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  upperRow: {
    width: SIZES.width - SIZES.large * 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SIZES.large,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    gap: 8,
    position: 'absolute',
    zIndex: 100
  },
  heading: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
    color: COLORS.lightWhite
  }
})

export default styles
