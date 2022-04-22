import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={() => navigation.navigate('Home')}>Logout</Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
