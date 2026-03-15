import styles from './PageBlobs.module.css'

/** Fixed colorful blobs behind all content — parallax via --scroll-y CSS var */
export default function PageBlobs() {
  return (
    <div className={styles.PageBlobs} aria-hidden="true">
      <div className={styles.b1} />
      <div className={styles.b2} />
      <div className={styles.b3} />
      <div className={styles.b4} />
      <div className={styles.b5} />
      <div className={styles.b6} />
    </div>
  )
}
