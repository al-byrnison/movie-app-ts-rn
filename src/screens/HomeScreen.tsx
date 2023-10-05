import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Ir a DetailScreen"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};

export default HomeScreen;
