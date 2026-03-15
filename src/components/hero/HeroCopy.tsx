import styles from './HeroCopy.module.css'

const DIRS: Array<[number, number]> = [
  [0, -220],
  [220, 0],
  [0, 220],
  [-220, 0],
  [160, -160],
  [160, 160],
  [-160, 160],
  [-160, -160],
]

const lines = [
  { words: ['WEB'] },
  { words: ['もっと'] },
  { words: ['自由に。'] },
]

export default function HeroCopy() {
  let letterIndex = 0

  return (
    <h1 className={styles.HeroCopy} aria-label="WEB もっと 自由に。">
      {lines.map((line, li) => (
        <span key={li} className={`${styles.HeroCopy_line} ${styles[`HeroCopy_line--${li}` as keyof typeof styles]}`}>
          {line.words.map((word, wi) => (
            <span key={wi} className={styles.HeroCopy_word}>
              {word.split('').map((char, ci) => {
                const [lx, ly] = DIRS[letterIndex % DIRS.length]
                const delay = letterIndex * 0.04
                const isPeriod = char === '.' || char === '。'
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
