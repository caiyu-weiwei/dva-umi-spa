import { PureComponent } from 'react'
import Page from '@/components/PageWrapper/index'
class Index extends PureComponent{

  render() {
    return (
      <Page
        pathtitles={[{
          title: 'gitDataV',
          icon: 'github'
        }]}
        title={'GitDataV'}
      >
        <div>github</div> 
      </Page>
    )
  }
}

export default Index