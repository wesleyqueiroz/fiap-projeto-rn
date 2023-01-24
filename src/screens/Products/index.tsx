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
  Loading
} from './styles';


export function Products() {
    const perPage = 4;
    const [data, setData] = useState([
       
    ]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
  
  async function loadData() {
    if(loading) return;

    setLoading(true);

   const token = await AsyncStorage.getItem('token');
   if(token){
      
      console.log(token);
      const response = await ApiConn.get(`/storeProducts/?perPage=${perPage}&page=${page}`,
      {
        headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    setData([...data,...response.data.products]);
    setPage(page + 1);
    setLoading(false);
   

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
           favoriteVisible={true}

                />}}
           onEndReached={loadData}  
           ondEndReachedThreshold={0.1}   
           ListFooterComponent={loading && <Loading/>}
        />
        

        
      </Container>
    </>
  )
}