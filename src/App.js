import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './Pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pet/:id' element={<Home />} />
              </Routes>
            </BrowserRouter>
            )
      }
    </>
  )
}
