import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;

  main {
    flex: 1;
    height: calc(100vh - 100px);
    background: ${(props) => props.theme['gray-100']};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const LoginCard = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 5px;
  flex-direction: column;
  padding: 30px;
  background-color: ${(props) => props.theme['gray-400']};
  width: 400px;
  height: 300px;

  form {
    width: 100%;
    height: 100%;
  }
`

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`

export const FormInput = styled.input`
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
`

export const FormButton = styled.button`
  margin-top: 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  color: ${(props) => props.theme['gray-900']};
  width: 100%;
  transition: all 0.1s ease-out;

  &:hover {
    opacity: 0.8;
  }
`
