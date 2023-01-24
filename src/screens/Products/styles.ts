import styled from 'styled-components/native';
import { FlatList, FlatListProps, ActivityIndicator } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

interface ProductsListDataProps {
  _id: string;
  name: string;
  price: float;
}

export const Container = styled.View`
  flex: 1;
  background-color: #F2F3F5;
  padding: 0 24px;
  align-items:center;
  justify-content:center;
`;

export const Loading = styled.ActivityIndicator`
  padding:5px;
  color:#121212;
  size:25px;
`;

export const Metadata = styled.View`
  margin-top: 32px;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: 'Rubik_500Medium';
  color: #3D434D;
`;

export const ProductsList = styled(
  FlatList as new (props: FlatListProps<ProductsListDataProps>) => FlatList<ProductsListDataProps>
).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${RFValue(16)}px;
`;
