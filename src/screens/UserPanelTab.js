import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Settings from './Settings';

const UserPanelTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name='Profile' component={Profile} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  );
};

export default UserPanelTab;

const styles = StyleSheet.create({});
