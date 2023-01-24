import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import MapView from 'react-native-maps';

import { RFValue } from 'react-native-responsive-fontsize';

interface LoginListDataProps {
  id: string;
  email: string;
  password: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #F2F3F5;
  padding: 12px 12px;
  max-width:92%;;
  
`;


export const Row = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: 'Rubik_500Medium';
  color: #3D434D;
`;
export const Price = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: 'Rubik_500Medium';
  margin-top: 32px;
  color: #2875CE;
`;

export const Icon = styled(Fontisto).attrs({
  size: 35,
})`
  margin-right: 2px;
  opacity: 1;
`;

export const MapContainer = styled.View`
  flex: 1.5;
  max-width:98%;
  padding: 10px 10px;
`;




