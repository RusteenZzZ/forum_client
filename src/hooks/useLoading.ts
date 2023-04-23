import { useState } from "react"

export const useLoading = (callback: (...arg: any) => Promise<any>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const loading = async (...args: any) => {
    try {
      setIsLoading(true)
      await callback(...args)      
    } catch(e: unknown) {
      if(e instanceof Error) {
        setError(e.message)
        console.log(e.message);
      } else {
        console.log(e)
        setError('Unknown Error, it has been logged into console')
      }
    } finally {      
      setIsLoading(false)
    }
  }

  return {loading, isLoading, error}
}