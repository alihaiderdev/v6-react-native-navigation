import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Contact = ({ route, navigation }) => {
  return (
    <View>
      <Text>Contact</Text>
      {route?.params && <Text>Params: {JSON.stringify(route.params)}</Text>}
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
