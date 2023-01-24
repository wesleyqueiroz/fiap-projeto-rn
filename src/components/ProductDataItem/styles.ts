import styled from 'styled-components/native';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';



export const Container = styled.View`



  flex-direction: row;
  justify-content: space-between;
  min-height: ${RFValue(80)}px; 
  border-radius: 4px;
  margin-bottom: 8px;
  width:92%;
  padding-left:4px;
`;

export const RootContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 1px #e3e4e5;
  margin-bottom: 8px;
`;
export const ShowProductDetailButton = styled.TouchableOpacity`
  
`;

export const Icon = styled(Feather).attrs({
  size: 30,
})`
  margin-right: 2px;
  opacity: 0.6;
`;
export const IconFavorite = styled(Fontisto).attrs({
  size: 35,

})`
  margin-right: 2px;
  opacity: 0.6;
`;

export const PassData = styled.View`
  max-width: 243px;
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-family: 'Rubik_400Regular';
  font-size: ${RFValue(13)}px;
  color: #888D97;
`;

export const Price = styled.Text`
  font-family: 'Rubik_500Medium';
  font-size: ${RFValue(15)}px;
  color: #1967FB;
`;

export const ProductData = styled.View`
  max-width: 80%;
  
`;

export const BoldTitle = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-family: 'Rubik_500Medium';
  font-size: ${RFValue(15)}px;
  color: #3D434D;
`;

export const Name = styled.Text`
  font-family: 'Rubik_400Regular';
  font-size: ${RFValue(13)}px;
  color: #888D97;
`;


