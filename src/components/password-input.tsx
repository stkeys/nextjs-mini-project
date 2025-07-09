'use client';

import {useState, type  ComponentProps } from 'react';
import { Input } from './ui/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
type PasswordInputProps = Omit<ComponentProps<"input">, "type">

export const PasswordInput = ({className, ...props} : PasswordInputProps ) => {
  const [showPassword, setShowPassword] = useState(false);
  const type = showPassword ? 'text' : 'password';
  const Icon = showPassword ? EyeOffIcon : EyeIcon 
  function handleToggle() {
    setShowPassword(prev => !prev)
  }
  return (
    <div className='relative'>
    <Input type={type} className={className} {...props}/>
    <button type='button' onClick={handleToggle}
    className='absolute top-1/2 -translate-y-1/2 right-3'>
    <Icon />
    </button>
    </div>
  )
}
