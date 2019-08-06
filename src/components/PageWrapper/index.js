import { PureComponent } from 'react'
import { connect } from 'dva'
import Context from '@/utils/Context'
import PageHeader from '@/components/PageHeader/index'

class Page extends PureComponent {
  
  render() {
    const { children } = this.props
    return (
      <Context.Consumer>
        {
          ({ location }) => (
            <div>
              <PageHeader location={location}>
              </PageHeader>
              <div>{ children }</div>
            </div>
          )
        }
      </Context.Consumer>
    )
  }
}

export default connect()(Page)