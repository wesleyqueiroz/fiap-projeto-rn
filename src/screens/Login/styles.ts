import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';



export const Container = styled.View`
  flex: 1;
  background-color: #F2F3F5;
  padding: 0 ${RFValue(24)}px;
  align-items: center; 
  justify-content: center;

`;

export const Form = styled.View`
  margin-top: ${RFValue(24)}px;
  width:100%;
`;

export const Text = styled.Text`
  margin-top: ${RFValue(30)}px;
  font-size:${RFValue(16)}px;
  color:#2875CE;
  text-decoration-line: underline;
  font-family: 'Rubik_500Medium';

`;



export const Logo = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  border-radius: ${RFValue(75)}px;
  justify-content: center;
  align-items: center;

`;

