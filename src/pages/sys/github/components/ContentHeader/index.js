import { PureComponent } from 'react'
import Account from '../Account/index'
import styles from './index.less'

class ContentHeader extends PureComponent{

  render() {
    return (
      <div className={styles.contentHeaderWrapper}>
        <Account/>
      </div>
    )
  }
}

export default ContentHeader