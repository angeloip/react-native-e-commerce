import { View, FlatList } from 'react-native'
import ProductCardView from './ProductCardView'

const ProductRow = () => {
  const products = [1, 2, 3, 4]
  return (
    <View style={{ marginTop: 16 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  )
}

export default ProductRow
