import React, { useState,useEffect,  useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import ApiConn from '../../services/api/commons/api';
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";
import MapView, {Marker} from 'react-native-maps';

import * as Location from 'expo-location';

import {Dimensions, View} from 'react-native';

const {width,height} = Dimensions.get('window')


import {
  Container,
  Row,
  Title,
  Price,
  Icon,
  MapContainer
} from './styles';


export function ProductDetail({route}) {
  
  const { _id } = route.params;
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [store, setStore] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  
  async function loadData() {
    
   console.log("ID DO ROUTE "+ _id);
   const token = await AsyncStorage.getItem('token');
   if(token){
      
      console.log("TOKEN"+token);
    
      const response = await ApiConn.get(`/storeProducts/product/${_id}`,
      {
        headers: {
        'Authorization': `Bearer ${token}`
      }
    });
       setPrice(formatCurrency({ amount: response.data.product.price.toFixed(2), code: "BRL" })[0]);
       setData(response.data.product);
       setName(response.data.product.name);

       
       
       //console.log(data)


       const getPermissions = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log("Precisa de permissão!!!!");
          return;
        }
  
        let currentLocation = await Location.getCurrentPositionAsync({});
        //setLocation({latitude:currentLocation.coords.latitude, longitude:currentLocation.coords.longitude});
        console.log("Location:");
       console.log(currentLocation); 

        const arrayItems = [{
          title: 'minha localização',
            coordinates:{
              latitude:currentLocation.coords.latitude, 
              longitude:currentLocation.coords.longitude
        }}];
       const arrayCoordinates = [{
              latitude:currentLocation.coords.latitude, 
              longitude:currentLocation.coords.longitude
       }];
       response.data.product.stores.forEach((item)=>
        arrayItems.push(
          {
            title: item.name,
            coordinates:{
              latitude:item.latitude, 
              longitude:item.longitude
            }
          }
       ));
       

        response.data.product.stores.forEach((item)=>
        arrayCoordinates.push(
          {
            latitude:item.latitude, 
            longitude:item.longitude
          }
       ));

      console.log(arrayCoordinates)
       setStore(arrayItems)
       setCoordinates(arrayCoordinates)
      };
      getPermissions();
   
    }
  }

  async function handleFavoritePressed() {
    const token = await AsyncStorage.getItem('token');
    if(token){
      
      console.log("favoritando"+token);
    
        const response = await ApiConn.post(`/storeProducts/manageFavorite`,
        {
          productID:_id
        },
        {
          headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log("FAVORITOU "+JSON.stringify(response.data))
      loadData();
     
    }
  }


  useFocusEffect(useCallback(() => {
    loadData();
  }, []));

  return (
    <>
      
      <Container>
        
       <Row>
      <Title>{name}</Title>
      <View>
        <Icon  onPress={handleFavoritePressed}
            name="favorite"
            color={data.favorite ? 'blue' : 'gray'}
            fill={data.favorite ? 'blue' : 'gray'}
        />
      </View>
        </Row> 

      <Price>{price}</Price>

        
      </Container>
      <MapContainer>
        <Title>Onde Encontrar?</Title>
        <MapView style={{height:"100%", width:"100%"}}
        
 
        >
          { store.map((marker, index) => (
            <Marker
              key={index} 
              coordinate={marker.coordinates}
              title={marker.title}
            />
          ))}
           
          

        </MapView>
      </MapContainer> 
      
    </>
  )
}