import { View } from 'react-native'
import useFetch from '../../hooks/useFetch'
import { ActivityIndicator } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import styles from './productList.style'
import { FlatList } from 'react-native-gesture-handler'
import ProductCardView from './ProductCardView'

const ProductList = () => {
  const { data, isLoading } = useFetch()

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        numColumns={2}
        renderItem={({ item }) => <ProductCardView item={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  )
}

export default ProductList
