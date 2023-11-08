import { useState } from 'react'

type useFormResult = [
  state: any,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  reset: () => void
]

export const useForm = (initialState = {}): useFormResult => {
  const [state, setState] = useState(initialState)

  const reset = (): void => {
    setState(initialState)
  }

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [target.name]: target.value
    })
  }

  return [state, handleInputChange, reset]
}
