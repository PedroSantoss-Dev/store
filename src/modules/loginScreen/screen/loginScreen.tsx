import { useState } from 'react';

import Button from '../../../shared/components/buttons/button';
import Input from '../../../shared/components/inputs/input';
import * as S from '../styles/loginScreen.style';

const LoginScreen = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event?.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };

  return (
    <S.ContainerLoginScreen>
      <S.ContainerText>
        <S.Title>Digite seu usuário e senha para fazer login.</S.Title>
      </S.ContainerText>
      <S.ContainerForm>
        <Input title="Usuario" onChange={handleUser} value={user} />
        <Input title="Senha" type="password" onChange={handlePassword} />
        <Button width="6rem" margin="1.6rem">
          Entrar
        </Button>
      </S.ContainerForm>
    </S.ContainerLoginScreen>
  );
};
export default LoginScreen;
