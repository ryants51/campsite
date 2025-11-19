import { TwinkleStars } from './TwinkleStars'
import { ShootingStars } from './ShootingStars'

export function StarField() {
  const width = window.innerWidth
  const height = window.innerHeight

  return (
    <div className="absolute inset-0 z-[1]">
      <TwinkleStars height={height} width={width} />
      <ShootingStars height={height} width={width} />
    </div>
  )
}
