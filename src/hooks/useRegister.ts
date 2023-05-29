import { ChangeEvent, useState } from 'react'

interface RegisterFormType {
  email: string
  name: string
  password: string
  repeatPassword: string
}

const useRegister = () => {
  const [form, setForm] = useState<RegisterFormType>({
    email: '',
    name: '',
    password: '',
    repeatPassword: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return {
    handleChange
  }
}

export default useRegister
