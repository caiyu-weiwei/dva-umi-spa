import { PureComponent } from 'react'
import { connect } from 'dva'
import Context from '@/utils/Context'
import PageHeader from '@/components/PageHeader/index'

class Page extends PureComponent {
  
  render() {
    const { children, title, flattenMenu} = this.props
    console.log('flattenMenu Page', flattenMenu)
    
    return (
      <Context.Consumer>
        {
          ({location}) => (
            <div>
              <PageHeader location={location} title={title} flattenMenu={flattenMenu}>
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