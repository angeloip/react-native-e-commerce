import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 100
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium
  },
  titleRow: {
    marginHorizontal: SIZES.large,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 20
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  price: {
    fontFamily: 'semiBold',
    fontSize: SIZES.large,
    paddingHorizontal: 10
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.large,
    marginHorizontal: SIZES.large
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingTxt: {
    fontFamily: 'medium',
    color: COLORS.gray
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  quantityTxt: {
    fontFamily: 'medium',
    color: COLORS.gray,
    fontSize: SIZES.medium
  },
  descriptionWrapper: {
    marginTop: SIZES.large - 5,
    marginHorizontal: SIZES.large
  },
  descriptionTitle: {
    fontFamily: 'medium',
    fontSize: SIZES.large - 2
  },
  descriptionTxt: {
    fontFamily: 'regular',
    fontSize: SIZES.small
  },
  locationWrapper: {
    marginVertical: SIZES.small
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginHorizontal: SIZES.large,
    padding: 10,
    borderRadius: SIZES.large
  },
  cartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SIZES.large
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small / 2,
    borderRadius: SIZES.large
  },
  cartTxt: {
    marginLeft: SIZES.small,
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
    color: COLORS.lightWhite
  },
  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bagIcon: {
    color: COLORS.lightWhite
  }
})

export default styles
