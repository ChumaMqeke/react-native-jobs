import { useState } from 'react';
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native';
 import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.continer}>
        <Text style={styles.userName}>
            Hello Chuma!
        </Text>
        <Text style={styles.welcomeMessage}>
             Find your perfect job
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            //  value=''
             style={styles.searchInput}
             value={searchTerm}
             onChangeText={(text) => setSearchTerm(text)}    //callback function
             placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

       <View style={styles.tabsContainer}> 
        <FlatList // used when you want to render a list of items so that you can be able to scroll horizontally
          data={jobTypes} // calling the job types from the arrays
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {  // this will show the selected item (job type button)
                setActiveJobType(item);
                router.push(`/search/${item}`) // It will search through items
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{ item }</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item} // hover on the text to read the description of it
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
        />
       </View>

    </View>
  )
}

export default Welcome