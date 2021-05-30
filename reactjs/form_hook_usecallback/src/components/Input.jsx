import { useContext, useEffect, useRef } from 'react'
import FormContext from '../contexts/FormContext'

export default function Input({ name }) {
  const inputRef = useRef()
  const { registerField } = useContext(FormContext)

  useEffect(() => {
    if (inputRef.current) {
      registerField(name, inputRef.current)
    }
  }, [name, registerField])

  return (
    <input name={name} ref={inputRef} />
  )
}