import { Text, View, TouchableOpacity } from 'react-native'
import styles from './headings.style'
import { Ionicons } from 'react-native-vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const Headings = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('productsList')
          }}
        >
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings
