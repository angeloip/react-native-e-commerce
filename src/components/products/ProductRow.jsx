import { View, FlatList } from 'react-native'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'

const ProductRow = () => {
  const products = [1, 2, 3, 4]
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ gap: 10, marginBottom: 60 }}
      />
    </View>
  )
}

export default ProductRow
