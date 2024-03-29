import { Layout } from 'antd'
import styles from './index.less'
import GlobalFooter from '@/layouts/components/GlobalFooter/index.js'

const { Content, Footer } = Layout
export default ({ children, location }) => {
  console.log('basic children', children)
  return (
    <Layout className={ styles.loginWrapper }>
      
      <Content className={ styles.loginContent }>{ children }</Content>
      <Footer className={ styles.loginFooter }>
        <GlobalFooter footerWrapperBgc={true}></GlobalFooter>
      </Footer>
      
    </Layout>
  )
}