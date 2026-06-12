export const easeOut = [0.22, 1, 0.36, 1]

export const transitions = {
  smooth: {
    duration: 0.45,
    ease: easeOut,
  },
  quick: {
    duration: 0.22,
    ease: easeOut,
  },
  spring: {
    type: 'spring',
    stiffness: 280,
    damping: 26,
    mass: 0.8,
  },
}

export const viewport = {
  once: true,
  amount: 0.18,
}

export const pageVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: transitions.quick,
  },
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
}

export const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 18,
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
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
}

export const cardHover = {
  y: -4,
  boxShadow: '0 20px 35px -22px rgba(107, 158, 255, 0.55)',
  transition: transitions.spring,
}

export const buttonHover = {
  y: -1,
  transition: transitions.spring,
}

export const contactHoverTransition = {
  duration: 0.3,
  ease: easeOut,
}

export const contactCardHover = {
  y: -4,
  boxShadow: '0 20px 35px -22px rgba(107, 158, 255, 0.55)',
  transition: contactHoverTransition,
}

export const contactButtonHover = {
  y: -2,
  transition: contactHoverTransition,
}

export const buttonTap = {
  scale: 0.98,
  transition: transitions.quick,
}
