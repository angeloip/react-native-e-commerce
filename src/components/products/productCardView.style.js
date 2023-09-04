import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: 182,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary
  },
  imageContainer: {
    padding: SIZES.small / 2,
    paddingBottom: 0,
    overflow: 'hidden'
  },
  image: {
    aspectRatio: 5 / 4,
    borderRadius: SIZES.small,
    resizeMode: 'cover'
  },
  details: {
    paddingHorizontal: SIZES.small,
    gap: 2
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large
  },
  supplier: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    color: COLORS.gray
  },
  price: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium
  },
  addBtn: {
    position: 'absolute',
    bottom: SIZES.xSmall,
    right: SIZES.xSmall
  }
})

export default styles
