import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './index.less'
import { Layout } from 'antd'
import GlobalFooter from '@/layouts/components/GlobalFooter/index'
import Menu from '@/layouts/components/Menu/index'
const { Header, Footer, Sider, Content }  = Layout

class PlayformLayout extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('')
    const { dispatch } = this.props
    dispatch({
      type: 'menu/getMenuData',
      payload: {}
    })
  }

  render() {
    const { children } = this.props
    return (
      <Layout className={styles.playfromWrapper}>
        <Sider>
          <Menu></Menu>
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
  }
}

const mapStateToProps = (state) => {
  console.log('getMenuData mapStateToProps', state)
  return state
}

export default connect(mapStateToProps)(PlayformLayout)