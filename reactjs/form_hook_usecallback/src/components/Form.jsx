import { useState, useCallback } from 'react'
import FormContext from '../contexts/FormContext'

export default function Form({ children }) {
  const [inputs, setInputs] = useState([])

  const registerField = useCallback((name, ref) => {
    setInputs(oldInputs => [...oldInputs, { name, ref}])
  }, [])

  return (
    <form>
      <FormContext.Provider value={{ registerField }}>
        { children }
      </FormContext.Provider>
    </form>
  )
}