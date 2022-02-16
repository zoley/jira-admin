import { useEffect, useState } from "react";

const isFalsy = (value: any) => value === 0 ? false : !value
export const cleanObject = (object: any) => {
  const result = { ...object }
  Object.keys(result).forEach((key: any) => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  });
  return result
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebounce = (value:object, delay:number) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debounceValue
}