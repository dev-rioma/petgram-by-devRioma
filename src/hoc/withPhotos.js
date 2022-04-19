import { gql } from '@apollo/client'

const withPhotos = gql`
query getPhotos ($categoryId: ID) {
  photos (categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export default withPhotos
