import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './index.less'
import { Layout, Icon } from 'antd'
import GlobalFooter from '@/layouts/components/GlobalFooter/index'
import Menu from '@/layouts/components/Menu/index'
import Context from '@/utils/Context.js'
import Logo from '@/layouts/components/Logo/index'
const { Header, Footer, Sider, Content }  = Layout


class PlayformLayout extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark',
      collapsed: false,
      mode: 'inline'
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'menu/getMenuData',
      payload: {}
    })
  }

  getContext() {
    const { location } = this.props
    const { theme } = this.state
    return {
      location,
      theme
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const { children, menu: menuData } = this.props
    const { mode, collapsed } = this.state
    const layout = (
      <Layout className={styles.playfromWrapper}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Logo collapsible collapsed={this.state.collapsed}/>
          <Menu 
            menuData={ menuData }
            mode={ mode }
            collapsed={ collapsed }
          >
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content>{ children }</Content>
          <Footer className={ styles.footer }>
            <GlobalFooter></GlobalFooter>
          </Footer>
        </Layout>
      </Layout>
    )
    return (
      <Context.Provider value={this.getContext()}>
        <div>{layout}</div>
      </Context.Provider>
    )
  }
}

export default connect()(PlayformLayout)