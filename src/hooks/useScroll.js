import { useEffect, useState } from 'react'
// archivo provicional de hook
const useScroll = () => {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY < 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
  })
}

export default useScroll
