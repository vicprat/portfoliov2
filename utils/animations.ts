export const variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'easeInOut',
      staggerChildren: 0.1
    }
  }
}

export const gridVariants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'easeInOut',
      staggerChildren: 0.1
    }
  }
}

export const titleVariants = {
  hidden: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1 }
}

export const paragraphVariants = {
  hidden: { y: 30, opacity: 0 },
  enter: { y: 0, opacity: 1 }
}

export const socialLinkVariants = {
  hidden: { y: -30, opacity: 0 },
  enter: { y: 0, opacity: 1 }
}

export const buttonVariants = {
  hidden: { y: -30, opacity: 0 },
  enter: { y: 1, opacity: 1 }
}
