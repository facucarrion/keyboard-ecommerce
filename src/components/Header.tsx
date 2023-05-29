'use client'

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Image from 'next/image'

const paths = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Search', href: '/search' }
]

export const DesktopNav = () => {
  return (
    <Flex
      minWidth='max-content'
      alignItems='center'
      justify='center'
      gap='5'
      paddingY='2'
      display={{ base: 'none', md: 'flex' }}
    >
      {paths.map(({ name, href }) => (
        <Box
          key={name}
          _hover={{ backgroundColor: '#b4b4b444' }}
          px={2}
          py={1}
          borderRadius={10}
          fontSize={18}
          fontWeight={600}
        >
          <Link href={href}>{name}</Link>
        </Box>
      ))}
    </Flex>
  )
}

export const MobileNav = () => {
  return (
    <Flex display={{ base: 'flex', md: 'none' }}>
      <Menu>
        <MenuButton as={Button}>
          <HamburgerIcon
            color='#000000'
            boxSize='6'
          />
        </MenuButton>
        <MenuList>
          {paths.map(({ name, href }) => (
            <Box key={name}>
              <MenuItem
                as={Link}
                href={href}
              >
                {name}
              </MenuItem>
            </Box>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  )
}

export const DesktopProfile = () => {
  return (
    <Flex display={{ base: 'none', md: 'flex' }}>
      <ButtonGroup gap='1'>
        <Button
          as={Link}
          href='/auth'
        >
          Sign Up
        </Button>
        <Button
          as={Link}
          href='/auth'
        >
          Log in
        </Button>
      </ButtonGroup>
    </Flex>
  )
}

export const MobileProfile = () => {
  return (
    <Flex display={{ base: 'flex', md: 'none' }}>
      <Menu>
        <MenuButton as={Button}>
          <Image
            src='https://img.freepik.com/free-icon/user_318-804790.jpg'
            alt='PFP Placeholder'
            width={20}
            height={20}
          />
        </MenuButton>
        <MenuList>
          <MenuItem
            as={Link}
            href='/auth'
          >
            Sign Up
          </MenuItem>
          <MenuItem
            as={Link}
            href='/auth'
          >
            Log in
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export const Header = () => {
  return (
    <Flex
      minWidth='max-content'
      direction='column'
      position='sticky'
      top={0}
      zIndex={1}
      backgroundColor='#ffffff88'
      backdropFilter='blur(10px)'
    >
      <Flex
        minWidth='max-content'
        alignItems='center'
        justifyContent='space-between'
        p='2'
      >
        <Box p='2'>
          <Heading
            as='h1'
            size='lg'
          >
            QUERTY
          </Heading>
        </Box>
        <Spacer />
        <DesktopNav />
        <Spacer />
        <Flex gap='2'>
          <MobileProfile />
          <DesktopProfile />
          <MobileNav />
        </Flex>
      </Flex>
    </Flex>
  )
}
