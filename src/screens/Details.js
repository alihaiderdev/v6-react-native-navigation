import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Details = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Details</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
      <Button title='Close Drawer' onPress={() => navigation.closeDrawer()} />
      <Button title='Toggle Drawer' onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
