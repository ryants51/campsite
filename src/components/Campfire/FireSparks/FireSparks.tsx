import styles from './FireSparks.module.css'

function FireSparks() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {Array.from({ length: 7 }).map((_, i) => {
        const startX = 30 + Math.random() * 40
        const startY = 105 + Math.random() * 20
        const driftX = (Math.random() - 0.5) * 100

        return (
          <div
            key={`drift-${i}`}
            className={styles.spark}
            style={{
              left: `${startX}%`,
              bottom: `${startY}%`,
              animationDelay: `${Math.random() * 1.5}s`,
              animationDuration: `${1.8 + Math.random() * 1.8}s`,
              transform: `scale(${0.35 + Math.random() * 0.9})`,
              // @ts-ignore
              '--driftX': `${driftX}px`,
            }}
          />
        )
      })}
    </div>
  )
}

export { FireSparks }
