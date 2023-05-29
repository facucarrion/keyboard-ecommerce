'use client'

import { Button, Heading } from '@chakra-ui/react'
import { CustomInput } from '../CustomInput'
import useLogin from '@/hooks/useLogin'

export const LoginForm = () => {
  const { handleChange } = useLogin()

  return (
    <form
      onSubmit={() => undefined}
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}
    >
      <Heading as='h2'>Log-In</Heading>

      <CustomInput
        label='Email'
        name='email'
        type='email'
        placeholder='test@test.com'
        onChange={handleChange}
      />
      <CustomInput
        label='Password'
        name='password'
        type='password'
        placeholder='12345678'
        onChange={handleChange}
      />

      <Button
        type='submit'
        variant='outline'
        colorScheme='blue'
        width='full'
      >
        Log In
      </Button>
    </form>
  )
}
