import { PureComponent } from 'react'
import Breadcrumb from './components/Breadcrumb/index'
import styles from './index.less'
class PageHeader extends PureComponent{

  constructor() {
    super()
    this.state = {
      breadList: [],
      title: ''
    }
  }

  static defaultProps = {
    isShow: true,
    homePage: {
      icon: 'home',
      title: '首页',
      link: "/sys/github"
    }
  }

  componentDidMount() {
    const { flattenMenu=[] } = this.props
    console.log('componentDidMount flattenMenu', flattenMenu)
    this.getFlattenMenu(flattenMenu)
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps)
    const { flattenMenu=[] } = newProps
    this.getFlattenMenu(flattenMenu)
  }

  getFlattenMenu(flattenMenu) {
    const { homePage, location, title } = this.props
    const { pathname } = location
    let breadList = []
    flattenMenu.map(menu => {
      if (menu instanceof Object && menu.link && menu.link === pathname) {
        console.log('flattenMenu menu', menu)
        breadList = [...breadList.concat(homePage), ...menu.pathtitles]
        return
      }
    })
    this.setState({
      breadList: [...breadList],
      title
    })
  }
  render() {
    return (
      <div className={styles.pageHeader}>
        <Breadcrumb breadList={this.state.breadList}></Breadcrumb>
        <h2 className={styles.title}>{this.state.title}</h2>
      </div>
    )
  }
}

export default PageHeader