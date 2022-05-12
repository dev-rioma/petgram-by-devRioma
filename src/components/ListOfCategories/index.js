import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import useGetCategories from '../../hooks/useGetCategories'
import { Category } from '../Category'

import { List, Item } from './styles'

const API = 'https://petgram-by-devrioma-e63s5rlxw-dev-rioma.vercel.app/categories'

export const ListOfCategories = () => {
  const { categories, loading } = useGetCategories(API)
  // const { show } = useChangeScroll()
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
    <List fixed={fixed}>
      {
        loading
          ? <Item key='Loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
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
