import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
const useLikeMutation = () => {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO)

  return { toggleLikePhoto }
}

export default useLikeMutation
