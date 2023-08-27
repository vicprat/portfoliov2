import React from 'react'

interface AnimatedBgProps {
  children: React.ReactNode
}

export function AnimatedBg ({ children }: AnimatedBgProps) {
  return (
    <section className='relative '>
      <div className='absolute bg-purple-200 rounded-full opacity-50 top-1/4 mix-blend-multiply blur-xl -left-4 w-72 h-72 animate-blob' />
      <div className='absolute bg-yellow-200 rounded-full opacity-50 top-1/4 mix-blend-multiply blur-xl -right-4 w-72 h-72 animate-blob animation-delay-2000' />
      <div className='absolute bg-pink-200 rounded-full opacity-50 top-1/4 mix-blend-multiply blur-xl -bottom-8 left-20 w-72 h-72 animate-blob animation-delay-4000' />
      {children}
    </section>
  )
}
