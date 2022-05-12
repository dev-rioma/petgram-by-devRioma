import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export const Detail = ({ detailId }) => {
  const params = useParams()

  return (
    <PhotoCardWithQuery id={params.detailId} />
  )
}
