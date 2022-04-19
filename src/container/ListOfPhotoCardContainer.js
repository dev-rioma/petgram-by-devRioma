import React from 'react'
import withPhotos from '../hoc/withPhotos'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useQuery } from '@apollo/client'

export const ListOfPhotoCardContainer = ({ categoryId }) => {
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId: categoryId }
  })

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return <ListOfPhotoCards data={data} />
}
