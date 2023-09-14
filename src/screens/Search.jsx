import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Ionicons } from 'react-native-vector-icons'
import { COLORS, SIZES } from '../constants'
import styles from '../styles/search.style'
import { useState } from 'react'
import axios from 'axios'
import { SearchTitle } from '../components'

const Search = () => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async () => {
    setIsLoading(true)
    await axios
      .get(`http://10.0.2.2:5000/api/product/search/${search}}`)
      .then((res) => {
        setSearchResults(res.data)
      })
      .catch((err) => {
        console.log('Failed to fetch data', err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search Furniture"
            caretHidden={true}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Feather
              name="search"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View
          style={{
            flex: 1
          }}
        >
          <Image
            source={require('../../assets/images/Pose23.png')}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTitle item={item} />}
        />
      )}
    </SafeAreaView>
  )
}

export default Search
