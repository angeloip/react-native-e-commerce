import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../styles/productDetails.style'
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto
} from 'react-native-vector-icons'
import { useState } from 'react'
import { useRoute } from '@react-navigation/native'

const ProductDetails = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1)
  const {
    params: { item }
  } = useRoute()

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
          uri: item.imageUrl
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ {item.price}</Text>
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

        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionTxt}>{item.description}</Text>
        </View>

        <View style={styles.locationWrapper}>
          <View style={styles.location}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            >
              <Ionicons name="location" size={20} />
              <Text>{item.productLocation}</Text>
            </View>

            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            >
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text>Free Delivery</Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTxt}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={20} style={styles.bagIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails
