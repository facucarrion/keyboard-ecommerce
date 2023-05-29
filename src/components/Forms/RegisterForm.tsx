'use client'

import { Button, Heading } from '@chakra-ui/react'
import { CustomInput } from '../CustomInput'
import useRegister from '@/hooks/useRegister'

export const RegisterForm = () => {
  const { handleChange } = useRegister()

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
      <Heading as='h2'>Register</Heading>

      <CustomInput
        label='Email'
        name='email'
        type='email'
        placeholder='test@test.com'
        onChange={handleChange}
      />
      <CustomInput
        label='Name'
        name='name'
        type='text'
        placeholder='12345678'
        onChange={handleChange}
      />
      <CustomInput
        label='Password'
        name='password'
        type='password'
        placeholder='12345678'
        onChange={handleChange}
      />
      <CustomInput
        label='Repeat Password'
        name='repeatPassword'
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
        Register
      </Button>
    </form>
  )
}
