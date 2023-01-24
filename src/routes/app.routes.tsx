import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Signup } from '../screens/Signup';
import { Login } from '../screens/Login';
import { Products } from '../screens/Product';
import { ProductDetail } from '../screens/ProductDetail';
import DrawerNavigator from '../routes/drawer.navigation';

const {
  Navigator,
  Screen
} = createStackNavigator();




export function AppRoutes() {
  return (
    // <Navigator
    //   screenOptions={{
    //     headerShown: false
    //   }}
    // >
    //   <Screen name="Login" component={Login} />
    //   <Screen name="Signup" component={Signup} />
    //   <Screen name="Products" component={Products} />
      

    // </Navigator>
    <Navigator screenOptions={{}} initialRouteName="Login">
      <Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Screen name="Signup" component={Signup} options={{title: 'Novo Usuário'}} />
      <Screen name="ProductDetail" component={ProductDetail} options={{title: 'Detalhe do Produto'}}/>
      <Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />

    </Navigator>
  );
}