import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm } from 'react-hook-form';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import ApiConn from '../../services/api/commons/api';

 
import {
  Container,
  Form, 
  Logo,
  Text,
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

interface FormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email('Não é um email válido').required('Email é obrigatório!'),
  password: Yup.string().required('Senha é obrigatória!'),
})

type RootStackParamList = {
  Home: undefined;
  RegisterLoginData: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'RegisterLoginData'>;

export function Login() {
  const { navigate } = useNavigation<NavigationProps>()
  const {
    control,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleRegister(formData: FormData) {
    console.log(formData);
    try {
      const response = await ApiConn.post('/storeProducts/login', formData);

      if(response){
        const token = response.data.token;
        console.log("TOKENNNN "+token)
        const user = response.data.name;
        console.log("USER "+user);
        await AsyncStorage.setItem('token', token); 
        navigate('DrawerNavigator');
      }
    } catch (error) {
      if (error.response) {
        // Request made but the server responded with an error
        Alert.alert('Erro', `Falha no processamento do servidor ${JSON.stringify(error.response)}`)
      } else if (error.request) {
        // Request made but no response is received from the server.
        Alert.alert('Erro', `Sem resposta do servidor`)
      } else {
        // Error occured while setting up the request
        
        Alert.alert('Erro', `Falha no envio da requisição. Verifique o nome/senha`)
      }
      
    }
         
  }
  async function handleNavigateSignup(){
    navigate('Signup')
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      
       
      <Container>
      <Logo
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_K9_7iwiYmUJ3oDGf-VFMAeCELKRq-vT03Q&usqp=CAU',
        }}
      />
      
        <Form>
          <Input
            testID="email-input"
            title="E-mail"
            name="email"
            error={errors.email && errors.email.message}
            control={control}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input
            testID="password-input"
            title="Senha"
            name="password"
            error={errors.password && errors.password.message}
            control={control}
            secureTextEntry
          />

          <Button
            style={{
              marginTop: RFValue(8)
            }}
            title="Login"
            onPress={handleSubmit(handleRegister)}
          />
          
           
             <Text onPress={handleNavigateSignup}>{'Não tem uma conta?'}</Text>
        
        </Form>
      </Container>
      
      
     
    </KeyboardAvoidingView>
  )
}