import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
  const [savedData, setSavedData] = useState(() => {
    try{
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : initialValue

    } catch(error){
      return initialValue
    }
  });

  const setValue = value => {
    try{
      setSavedData(value);
      localStorage.setItem(key, JSON.stringify(value))
    } catch(error){
      console.error(error);
    }
  }

  return [savedData, setValue]
}