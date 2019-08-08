import { PureComponent } from 'react'
import { connect } from 'dva'
import Context from '@/utils/Context'
import PageHeader from '@/components/PageHeader/index'
import { formatMessage } from 'umi/locale'

class Page extends PureComponent {
  
  render() {
    const { children, desc, title, flattenMenu} = this.props
    
    return (
      <Context.Consumer>
        {
          ({location}) => (
            <div>
              <PageHeader location={location} title={title} flattenMenu={flattenMenu} describtion={formatMessage({id: desc})}>
              </PageHeader>
              <div>{ children }</div>
            </div>
          )
        }
      </Context.Consumer>
    )
  }
}

export default connect(({menu: {flattenMenu}}) => ({flattenMenu}))(Page)