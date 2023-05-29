import { FormControl, FormLabel, Input } from '@chakra-ui/react'

interface Props {
  label: string
  name: string
  type: string
  placeholder: string
  onChange: (e: any) => void
}

export const CustomInput = ({ label, type, placeholder, onChange }: Props) => {
  return (
    <FormControl>
      <FormLabel fontSize={20}>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        border='2px solid #606060'
        color='black'
        borderRadius={4}
        _placeholder={{ color: '#212121' }}
      />
    </FormControl>
  )
}
