import styles from './index.less'
import { projectName } from '@/utils/config.js'

export default ({ children }) => {
  return (
    <div className = {styles.loginWrapper}>
      <h2>{ projectName }</h2>
      <div>{ children }</div>
    </div>
  )
}