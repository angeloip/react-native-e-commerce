import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/newRivals.style'
import { TouchableOpacity } from 'react-native'
import { COLORS } from '../constants'
import { Ionicons } from 'react-native-vector-icons'
import { ProductList } from '../components'

const NewRivals = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  )
}

export default NewRivals
