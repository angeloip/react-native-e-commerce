import { View, FlatList, Text, ActivityIndicator } from 'react-native'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'
import useFetch from '../../hooks/useFetch'
import { COLORS, SIZES } from '../../constants'

const ProductRow = () => {
  const { data, isLoading, error } = useFetch()
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ gap: 10, marginBottom: 60 }}
        />
      )}
    </View>
  )
}

export default ProductRow
