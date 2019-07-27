import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './index.less'
import { Layout } from 'antd'
import GlobalFooter from '@/layouts/components/GlobalFooter/index'
import Menu from '@/layouts/components/Menu/index'
import Context from '@/utils/Context.js'
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

  render() {
    const { children, menu: menuData } = this.props
    const { mode, collapsed } = this.state
    const layout = (
      <Layout className={styles.playfromWrapper}>
        <Sider>
          <Menu 
            menuData={ menuData }
            mode={ mode }
            collapsed={ collapsed }
          >
          </Menu>
        </Sider>
        <Layout>
          <Header>Header</Header>
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