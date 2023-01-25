import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    
    IconUser,
    Container,
    Title, 
    FooterText,
    ContainerFooter,
    IconLogout,
    QuitButton
  } from './styles';


const {width} = Dimensions.get('screen');



const CustomDrawer  =  (props) => {
    const [user, setUser] = useState('');
    AsyncStorage.getItem('user').then(userName => {
         setUser(userName);
        })
    
  return (
    <>
    <DrawerContentScrollView {...props}>
       <Container>
        
       <IconUser
        name="user-circle" color="black"/>
        <Title>Olá, {user}</Title>
       </Container>
        
      <View style={styles.drawerListWrapper}>
        <DrawerItemList  {...props}
         
        />
      </View>
    </DrawerContentScrollView>
    <QuitButton onPress={() => props.navigation.navigate("Login")}>
    <ContainerFooter>
    <IconLogout
        name="sign-out" color="black"/>
        <FooterText>Sair</FooterText>
    </ContainerFooter>
    </QuitButton>
    
    </>
    
  );
};

export default CustomDrawer ;

const styles = StyleSheet.create({
  drawerListWrapper: {
    marginTop: 3,
  },
});