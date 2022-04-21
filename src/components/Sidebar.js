import {
  DrawerContentScrollView,
  DrawerContent,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image } from 'react-native';

const Sidebar = ({ ...props }) => {
  //   console.log({ props });
  return (
    <DrawerContentScrollView {...props}>
      {/* <Text>Custom Drawer</Text> */}
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          source={{
            uri: `https://cdn.pixabay.com/photo/2016/05/13/18/34/letter-1390586_960_720.jpg`,
          }}
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            marginBottom: 10,
          }}
        />
        <Text>Ali Haider</Text>
      </View>
      {/* the below line of code simply list down all items(screens) in drawer that
      are present in drawer navigator default drawer styling */}
      <DrawerItemList {...props} />
      {/* if you want to create your own drawer custom item then do this  */}
      {/* <DrawerItem
        label={'Help'}
        // onPress={() => console.log('Opening help page')}
        onPress={() => props.navigation.navigate('Details')}
      />
      <DrawerItem
        label={'Help'}
        onPress={() => props.navigation.navigate('Details')}
      />
      <DrawerItem
        label={'Help'}
        onPress={() => props.navigation.navigate('Details')}
      />
      <DrawerItem
        label={'Help'}
        onPress={() => props.navigation.navigate('Details')}
      />
      <DrawerItem
        label={'Help'}
        onPress={() => props.navigation.navigate('Details')}
      />
      <DrawerItem
        label={'Help'}
        onPress={() => props.navigation.navigate('Details')}
      /> */}
    </DrawerContentScrollView>
  );
};

export default Sidebar;

const styles = StyleSheet.create({});
