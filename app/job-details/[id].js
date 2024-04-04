import { useRoute } from '@react-navigation/native';
import {  Stack } from 'expo-router';
import { Text,
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl 
} from 'react-native';

import { useCallback, useState } from 'react';

// Local components 

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics 
} from '../../components';
import { COLORS, SIZES, icons } from '../../constants';
import useFetch from '../../hook/useFetch';

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
// This will allow you to get the specific ID of the job details page you are on.
const route = useRoute();
  const { id } = route.params;

// Fetch job details
const { data,  isLoading, error, refetch } = useFetch('job-details', {
 job_id: id
})

const [refreshing, setRefreshing] = useState(false);
const [activeTab, setAtiveTab] = useState(tabs[0]);

const onRefresh = () => {}

const displayaTabContent = () => { //Active buttons function to display specific info.
  switch (activeTab) {
    case "Qualifications":
      return <Specifics 
        title="Qualifications"
        points={data[0].job_highlights?.Qualifications ?? ['N/A']}
      />
    case "About":
       return <JobAbout
          info={data[0].job_description ?? "No data provided"}
        />
    case "Responsibilities":
      return <Specifics 
      title="Qualifications"
      points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
    />
   default:
    break;
  }
}

  return (
    // Styling the page in line..
   <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}> 

      <Stack.Screen 
      options={{ // Styling props
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerLeft: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
        ),

        headerRight: () => (
          <ScreenHeaderBtn 
            iconUrl={icons.share}
            dimension='60%'
            
          />
      )
      

      }}
      />
     
    <>
    <ScrollView showsVerticalScrollIndicator={false} RefreshControl=
    {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

      {isLoading ? (
        <ActivityIndicator size='large' color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : data.length === 0 ? (
        <Text>No data</Text>
      ) : (
        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
           
           <Company // Props
            companyLogo={data[0].employer_logo}
            jobTitle={data[0].job_title}
            companyName={data[0].employer_name}
            location={data[0].job_country}
           />

           <JobTabs 
             tabs={tabs}
             activeTab={activeTab}
             setAtiveTab={setAtiveTab}
           />
              
              {displayaTabContent()}
        </View>
      )
    }

    </ScrollView>
    </>
     
   </SafeAreaView>
  )
}

export default JobDetails;
