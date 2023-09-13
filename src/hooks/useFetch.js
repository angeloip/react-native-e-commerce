import axios from 'axios'
import { useEffect, useState } from 'react'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const useFetch = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const useFetch = async () => {
    setIsLoading(true)
    await sleep(3000)
    await axios
      .get('http://10.0.2.2:5000/api/product')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const refetch = () => {
    setIsLoading(true)
    useFetch()
  }

  useEffect(() => {
    useFetch()
  }, [])

  return { data, isLoading, error, refetch }
}

export default useFetch
