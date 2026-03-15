import styles from './HeroCopy.module.css'

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
          {line.words.map((word, wi) => {
            const words = word === 'Creativity.' ? word.slice(0, -1) : word
            const isPeriodLine = word === 'Creativity.'
            const delay = letterIndex * 0.04
            letterIndex++

            return (
              <span
                key={wi}
                className={styles.HeroCopy_word}
                style={{ animationDelay: `${delay + 9.0}s` }}
              >
                {words}
                {isPeriodLine && (
                  <span className={styles.HeroCopy_periodIcon}>.</span>
                )}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
