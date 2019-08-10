import { PureComponent } from 'react'
import Account from '../Account/index'
import AccountInfo from '../AccountInfo/index'
import styles from './index.less'

class ContentHeader extends PureComponent{

  render() {
    return (
      <div className={styles.contentHeaderWrapper}>
        <Account/>
        <AccountInfo/>
      </div>
    )
  }
}

export default ContentHeader