import React, { PureComponent } from 'react'
import memoizeOne from 'memoize-one'
import { Menu, Icon } from 'antd'
import { connect } from 'dva'
import Consumer from '@/utils/Consumer'
import isEqual from 'lodash.isEqual'
import IconFont from '@/layouts/components/IconFont/index'
const { SubMenu, Item } = Menu

class MainMenu extends PureComponent {
  constructor(props) {
    super(props)
    this.renderMenu = memoizeOne(this.renderMenu, isEqual)
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  renderMenu = (menuData = []) => {
    if (!Array.isArray(menuData)) return []
    console.log('menuData menuData', menuData)
    return menuData.map(menu => {
      if (menu === undefined) return false
      console.log('row menu', menu)
      const { key, title, children, icon } = menu
      if (Array.isArray(children) && children.length) {
        const subMenu = this.renderMenu(children)
        return (
          <SubMenu
            key={key}
            title={
              <span>
                <IconFont type={icon} />
                <span>{title}</span>
              </span>
            }
          >
          {subMenu}
          </SubMenu>
        )
      }
      return(
        <Item key={key}>
          <IconFont type={icon}/>
          <span>{title}</span>
        </Item>
      )
    })
  }

  render() {
    const { menuData, theme, location, mode, collapsed } = this.props
    const menus = this.renderMenu(menuData)
    return (
      <Menu
        mode={mode}
        theme={theme} 
      >
        {menus}
      </Menu>
    )
  }
}


export default connect(({menu: { menuData }}) => ({ menuData }))(Consumer(MainMenu))