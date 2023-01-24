import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View} from 'react-native';
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";
import ApiConn from '../../services/api/commons/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  ShowProductDetailButton,
  Icon,
  PassData,
  Title,
  Price,
  ProductData,
  BoldTitle,
  Email,
  RootContainer,
  IconFavorite
} from './styles';

interface Props {
  _id: string;
  name: string;
  price: string;
  favorite: boolean;
  favoriteVisible: boolean;
}

export function ProductDataItem({
  _id,
  name,
  price, 
  favorite,
  favoriteVisible
}: Props) {
  const { navigate } = useNavigation<NavigationProps>();
 
  /* async function handleFavoritePressed() {
    const token = await AsyncStorage.getItem('token');
    if(token){
      
      console.log("TOKEN"+token);
    
        const response = await ApiConn.post(`/storeProducts/manageFavorite`,
        {
          productID:_id
        },
        {
          headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log("FAVORITOU "+ favorite+JSON.stringify(response.data))
     
     
    }
  } */
  
  function handleProductDetail() {
    navigate("ProductDetail", {_id});
  }
  price = formatCurrency({ amount: price.toFixed(2), code: "BRL" })[0];

  

  return (
    <RootContainer>
    <Container>
    
          <ProductData>         
            <BoldTitle>Título - {name}</BoldTitle>
            <Price>{price}</Price>
                       
          </ProductData>
          <View>
          <IconFavorite
               name="favorite"
                color={favorite ? 'blue' : 'gray'}
               />
              {/* {favoriteVisible && <IconFavorite onPress={handleFavoritePressed}
                name="favorite"
                color={favorite ? 'blue' : 'gray'}
                fill={favorite ? 'blue' : 'gray'}/>} */}
          </View>
  
    </Container>
    <View style={{width:'7%', justifyContent:'center'}}>
    <ShowProductDetailButton
              onPress={handleProductDetail}>
                <Icon
                name="chevron-right"
                color="black"/>  
          </ShowProductDetailButton>  
    </View>
    </RootContainer>
  );
}