import styles from './index.less'
import { projectName } from '@/utils/config.js'

export default ({ children, location }) => {
  console.log('basic children', children)
  return (
    <div className = {styles.loginWrapper}>
      <div className={styles.loginBox}>
          <h2 className={styles.projectName}>{ projectName }</h2>
          <div>{ children }</div>
      </div>
    </div>
  )
}