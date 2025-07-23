'use client'

import { motion } from 'framer-motion'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'

interface RotatingTextProps {
  texts: string[]
  rotationInterval?: number
  transition?: any
  mainClassName?: string
}

const RotatingText = forwardRef<any, RotatingTextProps>(
  (
    {
      texts,
      rotationInterval = 3000,
      transition = { type: 'spring', damping: 25, stiffness: 300 },
      mainClassName,
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    const next = useCallback(() => {
      setIsVisible(false) // Починаємо ховати
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % texts.length)
        setIsVisible(true) // Показати новий текст
      }, 300) // Тривалість анімації зникнення, підганяй під transition.duration
    }, [texts.length])

    useEffect(() => {
      const interval = setInterval(next, rotationInterval)
      return () => clearInterval(interval)
    }, [next, rotationInterval])

    useImperativeHandle(ref, () => ({
      next,
    }))

    return (
      <motion.span
        className={mainClassName}
        layout
        transition={transition}
        style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden' }}
      >
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'inline-block' }}
          aria-live="polite"
          aria-atomic="true"
        >
          {texts[currentIndex]}
        </motion.span>
      </motion.span>
    )
  }
)

RotatingText.displayName = 'RotatingText'
export default RotatingText
