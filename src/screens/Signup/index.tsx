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
  name:string,
  phone:string, 
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório!'),
  phone: Yup.string().required('Telefone é obrigatório!'),
  email: Yup.string().email('Não é um email válido').required('Email é obrigatório!'),
  password: Yup.string().required('Senha é obrigatória!'),
})

type RootStackParamList = {
  Home: undefined;
  RegisterLoginData: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'RegisterLoginData'>;

export function Signup() {
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
    const response = await ApiConn.put('/storeProducts/signup', formData);

        if(response){
          Alert.alert('Usuário Criado', 'Usuário criado com sucesso!')
          
          navigate('Login');
        }     
        
  } catch (error) {
    if (error.response) {
      // Request made but the server responded with an error
      Alert.alert('Erro', `Falha no processamento do servidor ${JSON.stringify(error.response.data.data)}`)
    } else if (error.request) {
      // Request made but no response is received from the server.
      Alert.alert('Erro', `Sem resposta do servidor`)
    } else {
      // Error occured while setting up the request
      Alert.alert('Erro', `Falha no envio da requisição`)
    }
    
  }
    
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
            title="Nome"
            name="name"
            error={errors.name && errors.name.message}
            control={control}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="text"
          />
           <Input
            title="Telefone"
            name="phone"
            error={errors.phone && errors.phone.message}
            control={control}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
          />
          <Input
            title="E-mail"
            name="email"
            error={errors.email && errors.email.message}
            control={control}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input
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
            title="Salvar"
            onPress={handleSubmit(handleRegister)}
          />
          
           
             
        
        </Form>
      </Container>
      
      
     
    </KeyboardAvoidingView>
  )
}