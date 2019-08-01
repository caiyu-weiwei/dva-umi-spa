import styles from './index.less'
import BasicLayout from './BasicLayout/index'
import PlayformLayout from './PlayformLayout/index'
 
export default ({ children, location }) => {
  const { pathname } = location
  console.log('children', children)
  if (pathname === '/' ||
      pathname === '/login') {
        return (
          <div className={ styles.normal }>
            <BasicLayout>{ children }</BasicLayout>
          </div>
        )
      }
  return (
    <div className={ styles.normal }>
      <PlayformLayout>{ children }</PlayformLayout>
    </div>
  )
}
