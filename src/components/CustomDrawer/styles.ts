import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';



export const Container = styled.View`

  flex-direction: row;
  min-height: ${RFValue(100)}px; 
  width:100%;
  padding-left:4px;
  background-color:#dad6d6;
`;
export const ContainerFooter = styled.View`

  flex-direction: row;
  min-height: ${RFValue(50)}px; 
  width:100%;
  padding-left:4px;
  background-color:#dad6d6;
  justify-content: center;
  align-items:center;
`;


export const IconUser = styled(FontAwesome).attrs({
  size: 30,
})`
  margin-right: 2px;
  opacity: 0.6;
`;

export const IconLogout = styled(FontAwesome).attrs({
    size: 30,
  })`
    margin-right: 2px;
    opacity: 0.6;
  `;


  export const QuitButton = styled.TouchableOpacity`
  
`;


export const Title = styled.Text`
  padding-left: ${RFValue(4)}px;
  font-family: 'Rubik_400Regular';
  font-size: ${RFValue(25)}px;
  color: black;
`;


export const FooterText = styled.Text`

  font-family: 'Rubik_500Medium';
  font-size: ${RFValue(15)}px;
  color: #3D434D;
`;




