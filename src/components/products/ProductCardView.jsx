import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './productCardView.style'
import { COLORS } from '../../constants'
import { Ionicons } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('productDetails')}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://i.ibb.co/SrtQZb3/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg'
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product awa lala wwooq qweqwe
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Provaider
          </Text>
          <Text style={styles.price}>$2353.00</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView
