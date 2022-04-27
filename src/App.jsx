import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import Contact from './components/Contact'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import ContentsPage from './components/ContentsPage'
import ContentView from './components/ContentView'

import { productsData, travelData } from './data/content'

const App = () => (
  <AppWrapper>
    <Navbar />
    <Routes>
      <Route element={<ContentsPage contents={productsData} />} path="/" />
      <Route element={<ContentsPage contents={travelData} />} path="/travel" />
      <Route element={<ContentView />} path=":contentName" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  </AppWrapper>
)

const AppWrapper = styled.div`
  margin: 0 3rem;
`

export default App;
