import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { axiosRequestCancel } from 'axios-api-utils';
const fetchData = async () => {
  axiosRequestCancel.get(
    'https://jsonplaceholder.typicode.com/posts?_delay=5000'
  );
};
export default function App() {
  useEffect(() => {
    fetchData();
    return axiosRequestCancel.cancelRequest(
      'https://jsonplaceholder.typicode.com/posts?_delay=5000'
    );
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
