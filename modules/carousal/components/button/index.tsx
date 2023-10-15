import Button from '@mui/material/Button';
import React from 'react'

export interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled: boolean
}

function ButtonComponent(props: ButtonProps) {
  const {title, onClick, disabled} = props
  return (
    <Button variant='contained' onClick={onClick} disabled={disabled}>
      {title}
    </Button>
  )
}

export default ButtonComponent