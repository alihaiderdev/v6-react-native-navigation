// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {
//   createDrawerNavigator,
//   useDrawerStatus,
//   useDrawerProgress,
// } from '@react-navigation/drawer';

// import About from './src/screens/About';
// import Details from './src/screens/Details';
// import Home from './src/screens/Home';

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={`https://image.shutterstock.com/image-vector/hd-company-linked-letter-logo-260nw-373534414.jpg`}
//     />
//   );
// }

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title='Go to notifications'
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title='Go back home' />
//     </View>
//   );
// }

// export default function App() {
//   const Drawer = createDrawerNavigator();
//   console.log('hello');
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName='Home'>
//         <Drawer.Screen name='Home' component={HomeScreen} />
//         <Drawer.Screen name='Notifications' component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   const Tab = createBottomTabNavigator();
//   console.log('hello');
//   return (
//     // <NavigationContainer>
//     //   <Tab.Navigator>
//     //     <Tab.Screen name='Home' component={HomeScreen} />
//     //     <Tab.Screen name='Settings' component={SettingsScreen} />
//     //   </Tab.Navigator>
//     // </NavigationContainer>
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name='Home' component={HomeScreen} />
//         <Tab.Screen name='Settings' component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   const { Navigator, Screen } = createNativeStackNavigator();
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       {/* <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <StatusBar style='auto' />
//       </View> */}
//       <Navigator
//         initialRouteName='Home'
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       >
//         {/* <Screen name='Home' component={Home} options={{ title: 'My home' }} /> */}
//         {/* <Screen
//           name='Home'
//           component={Home}
//           options={
//             (({ route }) => ({ title: route?.params?.name }),
//             {
//               headerStyle: {
//                 backgroundColor: 'yellowgreen',
//               },
//               headerTintColor: '#fff',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 20,
//               },
//             })
//           }
//         /> */}
//         <Screen
//           name='Home'
//           component={Home}
//           options={{
//             headerTitle: (props) => <LogoTitle {...props} />,
//             headerRight: () => (
//               <Button
//                 onPress={() => alert('This is a button!')}
//                 title='Info'
//                 color='#fff'
//               />
//             ),
//           }}
//         />
//         {/* <Screen name='Home'>
//           {(props) => <HomeScreen {...props} extraData={someData} />}
//         </Screen> */}
//         <Screen name='About' component={About} />
//         <Screen
//           name='Details'
//           component={Details}
//           initialParams={{ itemId: 42 }}
//         />
//         {/* <Screen
//           name='Details'
//           component={Details}
//           options={{ title: 'Overview' }}
//         /> */}
//       </Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
