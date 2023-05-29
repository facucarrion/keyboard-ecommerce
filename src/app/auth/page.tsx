'use client'

import { useState } from 'react'
import { LoginForm } from '@/components/Forms/LoginForm'
import { RegisterForm } from '@/components/Forms/RegisterForm'
import { Button, Flex, Text } from '@chakra-ui/react'

type ActionState = 'Login' | 'Sign Up'

export default function AuthPage() {
  const [action, setAction] = useState<ActionState>('Login')

  const handleAction = () => {
    setAction(action === 'Login' ? 'Sign Up' : 'Login')
  }

  return (
    <main
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <section
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem 0',
          gap: '1rem'
        }}
      >
        <Flex
          backgroundColor='#f1f1f1'
          width={{ base: '100%', md: '40%' }}
          direction='column'
          justifyContent='center'
          alignItems='center'
          p={4}
          gap={2}
          borderRadius={5}
          boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px'
        >
          {action === 'Login' && <LoginForm />}
          {action === 'Sign Up' && <RegisterForm />}
        </Flex>
        <Flex
          alignItems='center'
          gap={2}
        >
          {action === 'Login' && <Text>Not registered yet? </Text>}
          {action === 'Sign Up' && <Text>Already registered? </Text>}
          <Button
            variant='ghost'
            onClick={handleAction}
          >
            {action}
          </Button>
        </Flex>
      </section>
    </main>
  )
}
