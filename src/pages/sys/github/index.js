import { PureComponent } from 'react'
import Page from '@/components/PageWrapper/index'
import ContentHeader from './components/ContentHeader/index'
import styles from './index.less'
class Index extends PureComponent{

  render() {
    return (
      <Page
        title={'GitDataV'}
        desc={'gitDataV.desc'}
      >
        <div className={styles.pageContentWrapper}>
          <ContentHeader/>
        </div>
      </Page>
    )
  }
}

export default Index