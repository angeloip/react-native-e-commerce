import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../styles/productDetails.style'
import { Ionicons } from 'react-native-vector-icons'

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductDetails
