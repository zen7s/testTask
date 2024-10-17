import { Provider } from 'react-redux'
import Catalog from '../pages/catalog/ui/Catalog'
import { store } from './store'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Catalog />
      </Provider>
    </ChakraProvider>
  )
}

export default App
