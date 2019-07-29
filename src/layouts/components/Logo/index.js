import logo from '@/assets/menu-logo.svg'
import styles from './index.less'
import { projectName } from '@/utils/config'
export default () => {
  return (
    <div className={styles.logoWrapper}>
      <img className={styles.logoImg} src={logo} alt="logo"/>
      <span className={styles.projectName}>{ projectName }</span>
    </div>
  )
}