import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'bold',
    fontSize: 40
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  location: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
    color: COLORS.gray
  },
  cartCount: {
    position: 'absolute',
    bottom: 16,
    right: -6,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    zIndex: 10
  },
  cartNumber: {
    fontFamily: 'regular',
    fontWeight: '600',
    fontSize: 12,
    color: COLORS.lightWhite
  }
})

export default styles
