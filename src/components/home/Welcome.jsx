import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather, Ionicons } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>
      <View>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Feather name="search" size={24} style={styles.searchIcon} />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              placeholder="Search Furniture"
              caretHidden={true}
              onPressIn={() => navigation.navigate('Search')}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons
                name="camera-outline"
                size={SIZES.xLarge}
                color={COLORS.offwhite}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Welcome
