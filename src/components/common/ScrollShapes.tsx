/**
 * Lightweight decorative shapes that parallax with scroll.
 * Pure CSS — no JS render loop. All transforms use --scroll-y / --scroll-n
 * set by ScrollInit. z-index: 1, pointer-events: none (below all content).
 */
import styles from './ScrollShapes.module.css'

export default function ScrollShapes() {
  return (
    <div aria-hidden="true">
      {/* 1: Large ring — top right, slow upward */}
      <div className={`${styles.shape} ${styles.s1}`}>
        <div className={styles.s1i} />
      </div>

      {/* 2: Diamond — mid left, drifts down */}
      <div className={`${styles.shape} ${styles.s2}`}>
        <div className={styles.s2i} />
      </div>

      {/* 3: Hexagon — center right, fast upward */}
      <div className={`${styles.shape} ${styles.s3}`}>
        <div className={styles.s3i} />
      </div>

      {/* 4: Triangle — lower left, drifts up */}
      <div className={`${styles.shape} ${styles.s4}`}>
        <div className={styles.s4i} />
      </div>

      {/* 5: Small filled circle — center, medium upward */}
      <div className={`${styles.shape} ${styles.s5}`}>
        <div className={styles.s5i} />
      </div>

      {/* 6: Cross — top left, drifts down gently */}
      <div className={`${styles.shape} ${styles.s6}`}>
        <div className={styles.s6i} />
      </div>

      {/* 7: Medium ring — lower right, fast upward + spin */}
      <div className={`${styles.shape} ${styles.s7}`}>
        <div className={styles.s7i} />
      </div>

      {/* 8: Square — lower center-left, slow + rotates */}
      <div className={`${styles.shape} ${styles.s8}`}>
        <div className={styles.s8i} />
      </div>
    </div>
  )
}
