import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/Navbar'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}
