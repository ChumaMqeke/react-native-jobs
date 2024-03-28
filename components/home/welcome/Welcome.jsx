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

const Welcome = () => {
  const router = useRouter();

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
        <View styles={styles.searchWrapper}>
          <TextInput
             style={styles.searchInput}
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome