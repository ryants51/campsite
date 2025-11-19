import styles from './Moon.module.css'

function Moon() {
  return (
    <div className={`${styles.moon} ${styles.glow}`}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" fill="#f5f3e8" />
        <circle cx="130" cy="70" r="14" fill="#e2dfd2" />
        <circle cx="75" cy="60" r="10" fill="#e2dfd2" />
        <circle cx="85" cy="120" r="16" fill="#e2dfd2" />
        <circle cx="125" cy="130" r="8" fill="#e2dfd2" />
        <circle cx="60" cy="110" r="6" fill="#e2dfd2" />
      </svg>
    </div>
  )
}

export { Moon }
