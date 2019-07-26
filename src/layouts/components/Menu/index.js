import React, { PureComponent } from 'react'
import { Menu, Icon } from 'antd'
const { SubMenu, Item } = Menu

class MainMenu extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <div>123</div>
    )
  }
}

export default MainMenu