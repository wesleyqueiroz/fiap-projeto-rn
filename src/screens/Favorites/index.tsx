import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import ApiConn from '../../services/api/commons/api';
import {ProductDataItem} from '../../components/ProductDataItem';

import {
  Container,
  Metadata,
  Title,
  ProductsList,
  Loading,
  ContainerNoData
} from './styles';


export function Favorites() {
    
    const [data, setData] = useState([
       
    ]);
    
    
  
  async function loadData() {
  
   const token = await AsyncStorage.getItem('token');
   if(token){
      
      console.log(token);
      const response = await ApiConn.get(`/storeProducts/getFavProducts`,
      {
        headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(response.data);
    setData([...data,...response.data.products]);
    
    
   

   }
  }


  useFocusEffect(useCallback(() => {
    loadData();
  }, []));

  return (
    <>
      
      <Container>
        
      
      <ProductsList
       keyExtractor={(item) => item._id}
       data={data}
       renderItem={({ item: productData }) => {
         return <ProductDataItem
           _id={productData._id}
           name={productData.name}
           price={productData.price}
           favorite={productData.favorite}
           favoriteVisible={false}

                />}}
           
            
        />
        

        
      </Container>
      {data.length===0 && <ContainerNoData><Title>Não há nenhum produto favorito.</Title></ContainerNoData>}
    </>
  )
}