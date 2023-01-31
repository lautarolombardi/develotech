import { useState } from "react"

export const useLoader = (initialState) => {
  const [loading, setLoading] = useState(initialState);

  return {
    loading,
    setLoading
  }
}