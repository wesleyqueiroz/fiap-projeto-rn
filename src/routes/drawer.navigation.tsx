import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Products } from '../screens/Products';
import { Favorites } from '../screens/Favorites';
//import Icon from 'react-native-vector-icons/Ionicons';
//import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawer {...props} />}
//       screenOptions={{
//         headerShown: false,
//         drawerActiveBackgroundColor: COLORS.primary,
//         drawerActiveTintColor: COLORS.white,
//         drawerLabelStyle: {
//           marginLeft: -20,
//         },
//       }}>
//       <Drawer.Screen
//         name={ROUTES.HOME_DRAWER}
//         component={BottomTabNavigator}
//         options={{
//           title: 'Home',
//           drawerIcon: ({focused, color, size}) => (
//             <Icon name="home-sharp" size={18} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name={ROUTES.WALLET_DRAWER}
//         component={Wallet}
//         options={{
//           title: 'Wallet',
//           drawerIcon: ({focused, color, size}) => (
//             <Icon name="wallet" size={18} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name={ROUTES.NOTIFICATIONS_DRAWER}
//         component={Notifications}
//         options={{
//           title: 'Notifications',
//           drawerIcon: ({focused, color, size}) => (
//             <Icon name="notifications" size={18} color={color} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }
function MyDrawer() {
    return (
      <Drawer.Navigator useLegacyImplementation initialRouteName="Products">
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
  
  export default function DrawerNavigator() {
    return (
      
        <MyDrawer />
      
    );
  }