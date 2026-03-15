import styles from './HeroGeometric.module.css'

export default function HeroGeometric() {
  return (
    <div className={styles.HeroGeometric} aria-hidden="true">
      {/* 大きい円 */}
      <div className={`${styles.shape} ${styles.circle1}`} />
      <div className={`${styles.shape} ${styles.circle2}`} />
      <div className={`${styles.shape} ${styles.circle3}`} />

      {/* 線 */}
      <div className={`${styles.shape} ${styles.line1}`} />
      <div className={`${styles.shape} ${styles.line2}`} />

      {/* 小さいドット群 */}
      <div className={styles.dots}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.dot} style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </div>

      {/* 浮遊する四角形 */}
      <div className={`${styles.shape} ${styles.square1}`} />
      <div className={`${styles.shape} ${styles.square2}`} />

      {/* グリッド */}
      <div className={styles.grid} />
    </div>
  )
}
