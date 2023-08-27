'use client'
import { useRef, ReactNode } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, HTMLMotionProps } from 'framer-motion'
import { wrap } from '@motionone/utils'

interface ParallaxProps extends HTMLMotionProps<'div'> {
  baseVelocity?: number
  children: ReactNode
}

const ParallaxText: React.FC<ParallaxProps> = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className='flex overflow-hidden leading-tight tracking-tighter my-14 whitespace-nowrap flex-nowrap'>
      <motion.div
        className='flex' style={{ x }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export default ParallaxText
