import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Products } from '../screens/Products';
import { Favorites } from '../screens/Favorites';

import CustomDrawer from '../components/CustomDrawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();



  export default  function DrawerNavigator() {
   
    return (
        <Drawer.Navigator useLegacyImplementation initialRouteName="Products"
           drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen
            name="Produtos"
            component={Products}
            options={{ drawerLabel: 'Produtos' }}
          />
           <Drawer.Screen
            name="Favoritos"
            component={Favorites}
            options={{ drawerLabel: 'Favoritos' }}
          />
         
        </Drawer.Navigator>
      );
  }