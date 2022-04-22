import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Services from './src/screens/Services';
import Details from './src/screens/Details';
import Sidebar from './src/components/Sidebar';
import UserPanelTab from './src/screens/UserPanelTab';

const App = () => {
  // const Stack = createStackNavigator();
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  // const Tab = createMaterialBottomTabNavigator();
  // const Tab = createMaterialTopTabNavigator();

  return (
    // Nested Navigators
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='UserPanelTab'
          component={UserPanelTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // // Material Top Tabs Navigator
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName='Home'
    //     screenOptions={{
    //       tabBarStyle: { marginTop: 35, backgroundColor: 'red' },
    //       tabBarInactiveTintColor: 'yellow',
    //       tabBarActiveTintColor: 'white',
    //     }}
    //     tabBarPosition='top'
    //   >
    //     <Tab.Screen
    //       name='Home'
    //       component={Home}
    //       options={{
    //         title: 'Home Page',
    //         tabBarLabel: 'Overview',
    //         tabBarShowLabel: true,
    //         tabBarLabelPosition: 'beside-icon',
    //         tabBarLabelStyle: { fontWeight: 'bold' },
    //         tabBarIcon: () => (
    //           <MaterialCommunityIcons
    //             name='home'
    //             color={'white'}
    //             size={30}
    //             selectionColor={'yellow'}
    //           />
    //         ),
    //         tabBarBadge: () => <Text>100</Text>,
    //         tabBarIndicatorStyle: { backgroundColor: 'yellow' },
    //       }}
    //     />
    //     <Tab.Screen name='About' component={About} />
    //     <Tab.Screen name='Contact' component={Contact} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    // // Material Bottom Tabs
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName='Home'
    //     screenOptions={{}}
    //     labeled={true}
    //     activeColor='yellow'
    //     inactiveColor='white'
    //     barStyle={{ backgroundColor: 'gray' }}
    //   >
    //     <Tab.Screen
    //       name='Home'
    //       component={Home}
    //       options={{
    //         tabBarLabel: 'Home Page',
    //         tabBarIcon: () => (
    //           <MaterialCommunityIcons name='home' color={'yellow'} size='30' />
    //         ),
    //         tabBarBadge: 10,
    //       }}
    //     />
    //     <Tab.Screen name='About' component={About} />
    //     <Tab.Screen name='Contact' component={Contact} />
    //     <Tab.Screen name='Services' component={Services} />
    //     <Tab.Screen name='Details' component={Details} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    // // bottom tab navigator
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName='About'
    //     screenOptions={{
    //       headerStyle: { backgroundColor: 'red' },
    //       headerTintColor: 'white',
    //       headerTitleAlign: 'center',
    //       tabBarStyle: { backgroundColor: 'red' },
    //       tabBarActiveTintColor: 'yellow',
    //       tabBarInactiveTintColor: 'white',
    //     }}
    //   >
    //     <Tab.Screen
    //       name='Home'
    //       component={Home}
    //       options={{
    //         title: 'Home Page',
    //         tabBarLabel: 'Dashboard',
    //         tabBarShowLabel: false,
    //         tabBarLabelPosition: 'beside-icon',
    //         tabBarLabelStyle: { fontWeight: 'bold', marginBottom: 5 },
    //         tabBarIcon: () => (
    //           <MaterialCommunityIcons name='home' size={30} color='#fff' />
    //         ),
    //         tabBarBadge: 5,
    //       }}
    //     />
    //     <Tab.Screen name='About' component={About} />
    //     <Tab.Screen name='Contact' component={Contact} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    // Drawer Navigator
    // to use drawer navigator we have to configure babel then clear cache using expo r -c
    // // Custom Drawer Navigator
    // <NavigationContainer>
    //   <Drawer.Navigator
    //     drawerContent={(props) => <Sidebar {...props} />}
    //     screenOptions={{ drawerPosition: 'left', drawerType: 'slide' }}
    //   >
    //     <Drawer.Screen name='Home' component={Home} />
    //     <Drawer.Screen name='About' component={About} />
    //     <Drawer.Screen name='Contact' component={Contact} />
    //     <Drawer.Screen name='Services' component={Services} />
    //     <Drawer.Screen name='Details' component={Details} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    // // drawer navigator with multiple options
    // <NavigationContainer>
    //   <Drawer.Navigator
    //     initialRouteName='Home'
    //     screenOptions={{
    //       headerStyle: { backgroundColor: 'red' },
    //       headerTintColor: '#fff',
    //       headerTitleAlign: 'center',
    //       drawerActiveBackgroundColor: 'red',
    //       drawerActiveTintColor: '#fff',
    //       drawerStyle: { backgroundColor: 'lightgray', width: 250 },
    //     }}
    //     defaultStatus='closed'
    //   >
    //     <Drawer.Screen
    //       name='Home'
    //       component={Home}
    //       options={{
    //         drawerLabel: 'Home Page',
    //         headerTitle: 'Home Page',
    //         drawerIcon: (props) => (
    //           <MaterialCommunityIcons
    //             name='home'
    //             size={25}
    //             color='#fff'
    //             // style={{ paddingHorizontal: 20 }}
    //           />
    //         ),
    //       }}
    //     />
    //     <Drawer.Screen name='About' component={About} />
    //     <Drawer.Screen name='Contact' component={Contact} />
    //     <Drawer.Screen name='Services' component={Services} />
    //     <Drawer.Screen name='Details' component={Details} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    // // Basic Drawer Navigator
    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen name='Home' component={Home} />
    //     <Drawer.Screen name='About' component={About} />
    //     <Drawer.Screen name='Contact' component={Contact} />
    //     <Drawer.Screen name='Services' component={Services} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    // // Native Stack Navigator
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
    //     <Stack.Screen name='Home' component={Home} />
    //     <Stack.Screen name='About' component={About} />
    //     <Stack.Screen name='Contact' component={Contact} />
    //     <Stack.Screen name='Services' component={Services} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // Stack Navigator: we can customize stack navigator more than native stack navigator but its slower than native stack performance vise
    //  // Basic Navigation
    // by default the first screen will open when open app
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={Home} />
    //     <Stack.Screen name='About' component={About} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // // Navigator Props
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName='Home'
    //     screenOptions={{
    //       headerStyle: { backgroundColor: 'yellowgreen' },
    //     }}
    //   >
    //     <Stack.Screen name='About' component={About} />
    //     <Stack.Screen
    //       name='Home'
    //       component={Home}
    //       options={{
    //         headerStyle: { backgroundColor: 'red' },
    //         title: 'Social Pie',
    //         headerTintColor: '#fff',
    //         headerTitleStyle: { fontWeight: 'bold' },
    //         headerTitleAlign: 'center',
    //         headerShown: true,
    //         headerLeft: (props) => (
    //           <MaterialCommunityIcons
    //             name='home'
    //             size={30}
    //             color='#fff'
    //             style={{ paddingLeft: 10 }}
    //           />
    //         ),
    //         headerRight: (props) => (
    //           <>
    //             <MaterialCommunityIcons
    //               name='bell-circle'
    //               size={30}
    //               color='#fff'
    //               style={{ paddingRight: 10 }}
    //             />
    //             {/* <MaterialCommunityIcons
    //               name='rocket'
    //               size={30}
    //               color='red'
    //               onPress={() => console.log('onPress Clicked')}
    //               onPressIn={() => console.log('onPressIn Clicked')}
    //               onPressOut={() => console.log('onPressOut Clicked')}
    //               onLongPress={() => console.log('onLongPress Clicked')}
    //             /> */}
    //           </>
    //         ),
    //         cardStyle: { backgroundColor: 'yellow' },
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // // Grouping using group component
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen
    //       name='About'
    //       component={About}
    //       options={{ headerStyle: { backgroundColor: 'red' } }}
    //     />
    //     <Stack.Screen
    //       name='Home'
    //       component={Home}
    //       options={{ headerStyle: { backgroundColor: 'red' } }}
    //     /> */}

    //     {/* or using group  */}

    //     <Stack.Group
    //       screenOptions={{ headerStyle: { backgroundColor: 'red' } }}
    //     >
    //       <Stack.Screen name='Home' component={Home} />
    //       <Stack.Screen name='About' component={About} />
    //     </Stack.Group>

    //     <Stack.Screen name='Contact' component={Contact} />
    //     <Stack.Screen name='Services' component={Services} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // // route and navigation props
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
    //     <Stack.Screen
    //       name='Home'
    //       component={Home}
    //       initialParams={{ name: 'Ali Haider' }}
    //     />
    //     <Stack.Screen name='About' component={About} />
    //     <Stack.Screen name='Contact' component={Contact} />
    //     <Stack.Screen name='Services' component={Services} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
