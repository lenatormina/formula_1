import { useCallback, useState} from "react";

export const useHttpClient = () => {
  const baseURL = 'https://6287efc77af826e39e5a69a0.mockapi.io/api/';
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }
      const response = await fetch(`${baseURL}${url}`, { method, body, headers })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Что-то пошло не так")
      }
      setLoading(false)
      return data

    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])
  const clearError = () => setError(null)
  return { loading, request, error, clearError }
}
