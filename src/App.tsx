import { Routes, Route } from 'react-router-dom'

import Contact from './components/Contact'
import Landing from './components/Landing'
import NotFound from './components/NotFound'
import Products from './components/Products'

const App = () => (
  <div>
    <Routes>
      <Route element={<Landing />} path="/" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Products />} path="/product" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  </div>
)

export default App;
