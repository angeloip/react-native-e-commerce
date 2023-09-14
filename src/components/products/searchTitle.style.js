import { StyleSheet } from 'react-native'
import { COLORS, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: SIZES.small,
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#fff',
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
    marginHorizontal: SIZES.small,
    gap: SIZES.medium
  },
  image: {
    width: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
  productImg: {
    width: '100%',
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: 'cover'
  },
  productTitle: {
    fontSize: SIZES.medium,
    fontFamily: 'bold',
    color: COLORS.primary
  },
  supplier: {
    fontSize: SIZES.small + 2,
    fontFamily: 'regular',
    color: COLORS.gray
  },
  price: {
    fontSize: SIZES.small + 2,
    fontFamily: 'regular',
    color: COLORS.gray
  }
})

export default styles
