import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { ListOfPhotoCardContainer } from './container/ListOfPhotoCardContainer'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCardContainer categoryId={2} />
  </>
)
