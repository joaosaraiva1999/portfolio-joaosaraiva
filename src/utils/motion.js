export const easeOut = [0.22, 1, 0.36, 1]

export const transitions = {
  smooth: {
    duration: 0.32,
    ease: easeOut,
  },
  quick: {
    duration: 0.18,
    ease: easeOut,
  },
  spring: {
    type: 'spring',
    stiffness: 360,
    damping: 34,
    mass: 0.8,
  },
}

export const viewport = {
  once: true,
  amount: 0.12,
}

export const pageVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    y: 4,
    transition: transitions.quick,
  },
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
}

export const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
}

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
}

export const cardHover = {
  y: -3,
  transition: transitions.spring,
}

export const buttonHover = {
  y: -1,
  transition: transitions.spring,
}

export const buttonTap = {
  scale: 0.985,
  transition: transitions.quick,
}
