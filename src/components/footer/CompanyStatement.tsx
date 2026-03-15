import styles from './CompanyStatement.module.css'
import clsx from 'clsx'

interface CompanyStatementProps {
  theme?: 'blue' | 'default'
  alignLeft?: boolean
}

export default function CompanyStatement({
  theme = 'default',
  alignLeft = false,
}: CompanyStatementProps) {
  return (
    <div className={clsx(styles.CompanyStatement, styles[`CompanyStatement--${theme}`], alignLeft && styles['CompanyStatement--left'])}>
      <p className={styles.CompanyStatement_text}>
        We stand at the axis where<br />design meets technology.
      </p>
    </div>
  )
}
