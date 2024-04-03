import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Text,
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl 
} from 'react-native';

import { useCallback, useState } from 'react';

// Local components 

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn 
} from '../../components';
import { COLORS, SIZES, icons } from '../../constants';
import useFetch from '../../hook/useFetch';

const JobDetails = () => {
const params = useSearchParams(); // This will allow you to get the specific ID of the job details page you are on.
const router = useRouter();

// Fetch job details
const { data,  isLoading, error, refetch } = useFetch('job-details', {
 job_id: params.id
})

const [refreshing, setRefreshing] = useState(false);

const onRefresh = () => {}

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
            JobTitle={data[0].job_title}
            companyName={data[0].employer_name}
            location={data[0].job_country}
           />

           <JobTabs 
           
           />

        </View>
      )
    }

    </ScrollView>
    </>
     
   </SafeAreaView>
  )
}

export default JobDetails;
