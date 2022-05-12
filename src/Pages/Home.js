import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardContainer } from '../container/ListOfPhotoCardContainer'

export const Home = ({ id }) => {
  const params = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardContainer categoryId={params.id} />
    </>
  )
}
