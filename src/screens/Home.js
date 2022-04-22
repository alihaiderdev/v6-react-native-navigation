import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Link, useRoute, useNavigation } from '@react-navigation/native';

// for nested navigations
const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Login'
        onPress={() => navigation.navigate('UserPanelTab')}
      />
    </View>
  );
};

// const Home = () => {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   );
// };

// // Link component
// const Home = () => {
//   return (
//     <View>
//       <Link to={{ screen: 'About' }} style={{ fontSize: 25 }}>
//         About
//       </Link>
//       <Link to={{ screen: 'Contact' }} style={{ fontSize: 25 }}>
//         Contact
//       </Link>
//       <Link to={{ screen: 'Services' }} style={{ fontSize: 25 }}>
//         Services
//       </Link>
//     </View>
//   );
// };

// // route and navigation
// const Home = ({ route, navigation }) => {
//   console.log({ route, navigation });
//   return (
//     <View>
//       <Text>Name: {route.params.name}</Text>
//     </View>
//   );
// };

// // hook
// const Home = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   console.log({ route, navigation });
//   return (
//     <View>
//       <Text>Name: {route.params.name}</Text>
//     </View>
//   );
// };

export default Home;

const styles = StyleSheet.create({});
