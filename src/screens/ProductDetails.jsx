import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../styles/productDetails.style'
import { Ionicons, SimpleLineIcons } from 'react-native-vector-icons'
import { useState } from 'react'

const ProductDetails = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1)

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
      <Image
        source={{
          uri: 'https://i.ibb.co/SrtQZb3/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg'
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Hello my people</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 660.00</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <Ionicons key={i} name="star" size={24} color="gold" />
            ))}

            <Text style={styles.ratingTxt}> (4.9)</Text>
          </View>

          <View style={styles.quantity}>
            <TouchableOpacity
              onPress={() => setQuantity(quantity - 1)}
              disabled={quantity <= 1}
            >
              <SimpleLineIcons name="minus" size={24} />
            </TouchableOpacity>

            <Text style={styles.quantityTxt}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              disabled={quantity >= 9}
            >
              <SimpleLineIcons name="plus" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}></View>
      </View>
    </View>
  )
}

export default ProductDetails
