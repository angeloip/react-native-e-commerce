import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/home.style'
import { Ionicons, Fontisto } from 'react-native-vector-icons'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { Welcome, Carousel, Headings, ProductRow } from '../components'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.location}>Lima, Perú</Text>
          <View styles={{ alignItems: 'flex-end' }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
