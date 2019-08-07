import { PureComponent } from 'react'
import Breadcrumb from './components/Breadcrumb/index'
class PageHeader extends PureComponent{

  constructor() {
    super()
    this.state = {
      breadList: []
    }
  }

  static defaultProps = {
    isShow: true,
    homePage: {
      icon: 'home',
      title: '首页'
    }
  }

  componentDidMount() {
    this.getFlattenMenu()
  }

  componentDidUpdate() {
    // this.getFlattenMenu()
  }

  getFlattenMenu() {
    const { homePage, location, flattenMenu, title } = this.props
    console.log('PageHeader location', location)
    const { pathname } = location
    console.log('pathname', pathname)
    console.log('flattenMenu PageHeader', flattenMenu)
    console.log('title PageHeader', title)
    console.log('homePage PageHeader', homePage)
    let breadList = []
    flattenMenu.map(menu => {
      if (menu instanceof Object && menu.link && menu.link === pathname) {
        console.log('flattenMenu menu', menu)
        breadList.push(homePage)
        breadList = [...breadList, ...menu.pathnametitles]
        return
      }
    })
    console.log('breadList', breadList)
    this.setState({
      breadList: [...breadList]
    })
  }
  render() {
    
    return (
      <div>
        <Breadcrumb></Breadcrumb>
      </div>
    )
  }
}

export default PageHeader