import { ChangeEvent, useState } from 'react'

interface LoginFormType {
  email: string
  password: string
}

const useLogin = () => {
  const [form, setForm] = useState<LoginFormType>({
    email: '',
    password: ''
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

export default useLogin
