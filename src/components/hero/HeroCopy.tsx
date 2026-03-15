import styles from './HeroCopy.module.css'

// 8方向: top / right / bottom / left / 斜め4方向
const DIRS: Array<[number, number]> = [
  [0, -220],    // ↑
  [220, 0],     // →
  [0, 220],     // ↓
  [-220, 0],    // ←
  [160, -160],  // ↗
  [160, 160],   // ↘
  [-160, 160],  // ↙
  [-160, -160], // ↖
]

const lines = [
  { words: ['Design', 'at', 'the'] },
  { words: ['Axis', 'of'] },
  { words: ['Creativity.'] },
]

export default function HeroCopy() {
  let letterIndex = 0

  return (
    <h1 className={styles.HeroCopy} aria-label="Design at the Axis of Creativity.">
      {lines.map((line, li) => (
        <span key={li} className={styles.HeroCopy_line}>
          {line.words.map((word, wi) => (
            <span key={wi} className={styles.HeroCopy_word}>
              {word.split('').map((char, ci) => {
                const [lx, ly] = DIRS[letterIndex % DIRS.length]
                const delay = letterIndex * 0.035
                const isPeriod = char === '.'
                letterIndex++
                return (
                  <span
                    key={`${li}-${wi}-${ci}`}
                    className={`${styles.HeroCopy_letter}${isPeriod ? ` ${styles.HeroCopy_period}` : ''}`}
                    style={{ ['--lx' as string]: `${lx}px`, ['--ly' as string]: `${ly}px`, animationDelay: `${delay}s` }}
                  >
                    {char}
                  </span>
                )
              })}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}
