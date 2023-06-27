import React from 'react'
import {
  LoginCard,
  FormInput,
  FormButton,
  FormControl,
  LoginContainer,
} from './styles'
import { Header } from '../..//components/header/header'

export const Login: React.FC = () => {
  return (
    <LoginContainer>
      <Header />
      <main>
        <LoginCard>
          <h2>Login</h2>
          <form>
            <FormControl>
              <label>Email</label>
              <FormInput type="text" placeholder="Insira seu email" />
            </FormControl>
            <FormControl>
              <label>Password</label>
              <FormInput type="password" placeholder="Crie sua senha" />
            </FormControl>
            <FormButton type="submit">Cadastrar</FormButton>
          </form>
        </LoginCard>
      </main>
    </LoginContainer>
  )
}
