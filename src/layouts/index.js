import styles from './index.less'
import Basic from './Basic/index'

export default ({ children, location }) => {
  console.log('layouts children', children)
  return (
    <div>
      <Basic>{ children }</Basic>
    </div>
  )
}
