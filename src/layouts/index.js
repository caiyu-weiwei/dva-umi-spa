import styles from './index.less'
import BasicLayout from './BasicLayout/index'

export default ({ children, location }) => {
  const { pathname } = location
  if (pathname === '/' ||
      pathname === '/login') {
        return (
          <div className={ styles.normal }>
            <BasicLayout>{ children }</BasicLayout>
          </div>
        )
      }
}
