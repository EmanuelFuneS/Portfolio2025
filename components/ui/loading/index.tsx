'use client'

import React from 'react'

import { Spinner } from '@heroui/spinner'

interface LoadingProp {
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

const Loading = ({ label = 'Cargando...', size = 'md' }: LoadingProp) => {
  return (
    <div className='flex justify-center items-center py-8'>
      <Spinner label={label} size={size} color='primary' />
    </div>
  )
}

export default Loading
