import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import Contact from './components/Contact'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Products from './components/Products'

const App = () => (
  <AppWrapper>
    <Navbar />
    <Routes>
      <Route element={<Landing />} path="/" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Products />} path="/products" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  </AppWrapper>
)

const AppWrapper = styled.div`
  margin: 0 3rem;
`

export default App;
