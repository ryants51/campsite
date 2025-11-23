import styles from './FireSmoke.module.css'

export function FireSmoke() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {/* --- Large drifting smoke clouds --- */}
      {Array.from({ length: 4 }).map((_, i) => {
        const startX = 35 + Math.random() * 30 // 35–65%
        const driftX = (Math.random() - 0.5) * 140 // -70 to +70px sideways curve
        const scale = 0.8 + Math.random() * 1.4 // 0.8–2.2x size

        return (
          <div
            key={`cloud-${i}`}
            className={styles.smokeCloud}
            style={{
              left: `${startX}%`,
              bottom: `${110 + Math.random() * 8}%`,
              // @ts-ignore
              '--driftX': `${driftX}px`,
              animationDelay: `${i * 1.2}s`,
              transform: `scale(${scale})`,
            }}
          />
        )
      })}

      {/* --- Ember wisps that turn into smoke --- */}
      {Array.from({ length: 6 }).map((_, i) => {
        const startX = 40 + Math.random() * 20 // 40–60%
        const driftX = (Math.random() - 0.5) * 90 // -45 to +45px

        return (
          <div
            key={`wisp-${i}`}
            className={styles.smokeWisp}
            style={{
              left: `${startX}%`,
              bottom: `${105 + Math.random() * 12}%`,
              // @ts-ignore
              '--driftX': `${driftX}px`,
              animationDelay: `${Math.random() * 1.6}s`,
              animationDuration: `${2.4 + Math.random() * 1.6}s`,
            }}
          />
        )
      })}
    </div>
  )
}
