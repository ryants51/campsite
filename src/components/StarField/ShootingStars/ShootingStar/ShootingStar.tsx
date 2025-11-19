import styles from './ShootingStar.module.css'

interface Props {
  x: number
  y: number
  duration: number
}

export function ShootingStar({ x, y, duration }: Props) {
  return (
    <div
      className={styles.shooting}
      style={{
        top: y,
        left: x,
        animationDuration: `${duration}ms`,
      }}
    />
  )
}
