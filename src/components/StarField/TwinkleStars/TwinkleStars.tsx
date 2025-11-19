import { useRef } from 'react'
import styles from './TwinkleStars.module.css'

type StarShape = 'circle' | 'diamond' | 'cross' | 'oval'

interface Star {
  id: number
  top: number
  left: number
  size: number
  delay: number
  color: string
  shape: StarShape
}

interface Props {
  height: number
  width: number
  count?: number
}

export function TwinkleStars({ height, width, count = 60 }: Props) {
  const colors = ['#fffbe8', '#ffe9b0', '#d0e5ff', '#dfffee']
  const shapes: StarShape[] = ['circle', 'diamond', 'cross', 'oval']

  const starsRef = useRef<Star[]>(
    Array.from({ length: count }).map((_, i) => {
      const color = colors[Math.floor(Math.random() * colors.length)]
      const shape = shapes[Math.floor(Math.random() * shapes.length)]

      return {
        id: i,
        top: Math.random() * (height * 0.5),
        left: Math.random() * width,
        size: 4 + Math.random() * 6,
        delay: -Math.random() * 5,
        color,
        shape,
      }
    }),
  )

  const stars = starsRef.current

  return (
    <>
      {stars.map((star) => {
        const commonProps = {
          key: star.id,
          className: `${styles.star} ${styles.twinkle} absolute`,
          style: {
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          },
        }

        switch (star.shape) {
          case 'circle':
            return (
              <svg {...commonProps} viewBox="0 0 12 12">
                <circle cx="6" cy="6" r="5" fill={star.color} />
              </svg>
            )
          case 'diamond':
            return (
              <svg {...commonProps} viewBox="0 0 12 12">
                <polygon points="6,1 11,6 6,11 1,6" fill={star.color} />
              </svg>
            )
          case 'cross':
            return (
              <svg {...commonProps} viewBox="0 0 12 12">
                <rect x="5" y="1" width="2" height="10" fill={star.color} />
                <rect x="1" y="5" width="10" height="2" fill={star.color} />
              </svg>
            )
          case 'oval':
            return (
              <svg {...commonProps} viewBox="0 0 12 12">
                <ellipse cx="6" cy="6" rx="4" ry="3" fill={star.color} />
              </svg>
            )
        }
      })}
    </>
  )
}
