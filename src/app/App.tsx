import { Provider } from 'react-redux'
import Catalog from '../pages/catalog/ui/Catalog'
import { store } from './store'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Catalog />
      </Provider>
    </ChakraProvider>
  )
}

export default App
