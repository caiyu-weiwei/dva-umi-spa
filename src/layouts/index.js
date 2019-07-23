import styles from './index.less'
import BasicLayout from './BasicLayout/index'

export default ({ children, location }) => {
  console.log('layouts children', children)
  return (
    <div className={ styles.normal }>
      <BasicLayout>{ children }</BasicLayout>
    </div>
  )
}
