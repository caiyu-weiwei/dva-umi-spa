import { Spin } from 'antd'
import styles from './index.less'
export default () => {
  return (
    <div className={styles.loader}>
      <Spin size="large"  tip="Loading..."/>
    </div>
  )
}
