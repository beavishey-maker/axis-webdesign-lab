import styles from './HomeGlowDivider.module.css'

interface Props {
  color?: string
}

export default function HomeGlowDivider({ color = '#2D4AFF' }: Props) {
  return (
    <div
      className={styles.GlowDivider}
      style={{ ['--gd-color' as string]: color }}
      aria-hidden="true"
    >
      <div className={styles.GlowDivider_line} />
      <div className={styles.GlowDivider_orb} />
      <div className={styles.GlowDivider_orb2} />
    </div>
  )
}
