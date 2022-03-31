import React, { useState, useEffect } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import useGetCategories from '../../hooks/useGetCategories'
import { Category } from '../Category'

import { List, Item } from './styles'

const API = 'https://petgram-by-devrioma-r93n54cnu-dev-rioma.vercel.app/categories'

export const ListOfCategories = () => {
  const categories = useGetCategories(API)
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
