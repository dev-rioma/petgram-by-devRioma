import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetCategories = (API) => {
  const [categories, setCategories] = useState([])

  // useEffect(function () {
  //   window.fetch(API)
  //     .then(res => res.json())
  //     .then(response => {
  //       setCategories(response)
  //     })
  // }, [])

  useEffect(async () => {
    const response = await axios(API)
    setCategories(response.data)
  }, [])

  return categories
}

export default useGetCategories
