import styles from './Mountains.module.css'

export function Mountains() {
  return (
    <div className={styles.wrapper}>
      {/* BACK MOUNTAIN — higher peaks, lighter blue */}
      <svg
        className={`${styles.mountain} ${styles.back}`}
        viewBox="0 0 1440 480"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,300
            L120,260
            C240,220 300,150 420,180
            C520,210 600,110 720,160
            C880,220 960,130 1080,170
            C1200,210 1320,180 1440,220
            L1440,480
            L0,480
            Z
          "
          fill="#152037"
        />
      </svg>

      {/* MID MOUNTAIN — brownish felt */}
      <svg
        className={`${styles.mountain} ${styles.mid}`}
        viewBox="0 0 1440 480"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,340
            L160,310
            C260,280 320,240 440,260
            C560,280 660,220 780,260
            C900,300 1040,240 1180,270
            C1280,290 1360,320 1440,330
            L1440,480
            L0,480
            Z
          "
          fill="#4a3728"
        />
      </svg>

      {/* FRONT MOUNTAIN — keep as-is but taller */}
      <svg
        className={`${styles.mountain} ${styles.front}`}
        viewBox="0 0 1440 480"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,380
            L200,360
            C380,330 580,300 800,330
            C1020,360 1240,350 1440,360
            L1440,480
            L0,480
            Z
          "
          fill="#0b162c"
        />
      </svg>
    </div>
  )
}
