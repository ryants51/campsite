import { useEffect, useState } from 'react'
import { ShootingStar } from './ShootingStar'

interface Props {
  width: number
  height: number
}

interface ShootingStarData {
  id: number
  x: number
  y: number
  duration: number
}

export function ShootingStars({ width, height }: Props) {
  const [shootingStars, setShootingStars] = useState<ShootingStarData[]>([])

  function addShootingStar(id: number) {
    setShootingStars((prev) => [
      ...prev,
      {
        id,
        x: Math.random() * (width * 0.6),
        y: Math.random() * (height * 0.33),
        duration: 800 + Math.random() * 1000,
      },
    ])
  }

  function removeShootingStar(id: number) {
    setShootingStars((prev) => prev.filter((s) => s.id !== id))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.25) {
        return
      }

      const id = Date.now()

      addShootingStar(id)

      setTimeout(() => {
        removeShootingStar(id)
      }, 2000)
    }, 3000)

    return () => clearInterval(interval)
  }, [width, height])

  return (
    <>
      {shootingStars.map((s) => (
        <ShootingStar key={s.id} x={s.x} y={s.y} duration={s.duration} />
      ))}
    </>
  )
}
