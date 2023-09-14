import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import styles from './searchTitle.style'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SearchTitle = ({ item }) => {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('productDetails', { item })}
      >
        <View style={styles.image}>
          <Image
            source={{
              uri: item.imageUrl
            }}
            style={styles.productImg}
          />
        </View>
        <View>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.supplier}>{item.supplier}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTitle
