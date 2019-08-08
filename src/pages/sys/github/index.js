import { PureComponent } from 'react'
import Page from '@/components/PageWrapper/index'
class Index extends PureComponent{

  render() {
    return (
      <Page
        title={'GitDataV'}
        desc={'gitDataV.desc'}
      >
        <div>github</div> 
      </Page>
    )
  }
}

export default Index