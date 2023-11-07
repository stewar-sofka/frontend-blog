import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'

export const PrincipalRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}