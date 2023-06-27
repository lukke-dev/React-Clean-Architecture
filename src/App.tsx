import { Login } from './presentation/pages'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
