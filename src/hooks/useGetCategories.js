import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetCategories = (API) => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  // useEffect(function () {
  //   window.fetch(API)
  //     .then(res => res.json())
  //     .then(response => {
  //       setCategories(response)
  //     })
  // }, [])

  useEffect(async () => {
    setLoading(true)
    const response = await axios(API)
    setCategories(response.data)
    setLoading(false)
  }, [])

  return { categories, loading }
}

export default useGetCategories
