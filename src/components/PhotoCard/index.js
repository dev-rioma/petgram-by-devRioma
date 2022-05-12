import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min'
import { useLocalSorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import useLikeMutation from '../../hooks/useLikeMutation'
import { FavButton } from '../FavButton'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalSorage(key, false)
  const { toggleLikePhoto } = useLikeMutation()

  const handleFavClick = () => {
    setLiked(!liked)
    toggleLikePhoto({
      variables: { input: { id: id } }
    })
  }

  return (
    <Article ref={element}>
      {
        show && (
          <Fragment>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </Fragment>
        )
      }
    </Article>
  )
}
