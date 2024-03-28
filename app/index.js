import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native'; //these are react native components
import { Stack,useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
const Home = () => {
    const router = useState();

    return (
         //  allows you to show the content safely without the buttons appearing over it
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options = {{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension = "60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.profile} dimension = "100%" />
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {{
                    flex: 1,
                    padding: SIZES.medium
                }}>

              <Welcome
              
               />

              <Popularjobs />
              <Nearbyjobs />           
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;  