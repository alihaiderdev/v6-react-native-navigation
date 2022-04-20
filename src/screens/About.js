import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const About = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View>
      <Text>About</Text>
      <Button title='Go Back' onPress={() => navigation.goBack()} />
      <Button
        title='Services'
        onPress={() => navigation.navigate('Services')}
      />
      <Button
        title='Contact'
        onPress={() =>
          navigation.navigate('Contact', { from: 'About', to: 'Contact' })
        }
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
