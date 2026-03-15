import styles from './HomeMarquee.module.css'

const items = [
  'LP制作', 'コーポレートサイト', 'AIチャットボット', '公式LINE構築',
  '管理画面開発', 'AI診断サービス', 'ランディングページ', 'Webデザイン',
  '予約システム', 'ブランドサイト', 'SNS連携',
]

export default function HomeMarquee() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.HomeMarquee} aria-hidden="true">
      {/* Forward */}
      <div className={styles.HomeMarquee_row}>
        <div className={`${styles.HomeMarquee_track} ${styles['HomeMarquee_track--fwd']}`}>
          {doubled.map((item, i) => (
            <span key={i} className={styles.HomeMarquee_item}>
              <span className={styles.HomeMarquee_dot}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
      {/* Reverse */}
      <div className={styles.HomeMarquee_row}>
        <div className={`${styles.HomeMarquee_track} ${styles['HomeMarquee_track--rev']}`}>
          {doubled.map((item, i) => (
            <span key={i} className={`${styles.HomeMarquee_item} ${styles['HomeMarquee_item--light']}`}>
              <span className={styles.HomeMarquee_dot}>◇</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
