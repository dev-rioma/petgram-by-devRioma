import { useState } from 'react'

export function useLocalSorage (key, initiaValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initiaValue
    } catch (e) {
      return initiaValue
    }
  })

  const setLocalStorage = value => {
    try {
      value
        ? window.localStorage.setItem(key, JSON.stringify(value))
        : window.localStorage.removeItem(key, JSON.stringify(value))

      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
