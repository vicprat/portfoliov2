'use client'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

const OuterContainer = forwardRef<HTMLDivElement, ContainerProps>(function OuterContainer (
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className='w-full mx-auto max-w-7xl lg:px-8'>{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef<HTMLDivElement, ContainerProps>(function InnerContainer (
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className='max-w-2xl mx-auto lg:max-w-5xl'>{children}</div>
    </div>
  )
})

type ContainerComponent = typeof OuterContainer & {
  Outer: typeof OuterContainer
  Inner: typeof InnerContainer
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container (
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
}) as ContainerComponent

Container.Outer = OuterContainer
Container.Inner = InnerContainer
