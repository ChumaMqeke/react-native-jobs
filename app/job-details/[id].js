import { Text,
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl 
} from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';

// Local components 

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn 
} from '../../components';
import { COLORS, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

const JobDetails = () => {
const params = useSearchParams(); // This will allow you to get the specific ID of the job details page you are on.
const router = useRouter();

// Fetch job details
const { data,  isLoading, error, refetch } = useFetch('job-details', {
 job_id: params.id
})

  return (
    <Text>JobDetails</Text>
  )
}

export default JobDetails;
