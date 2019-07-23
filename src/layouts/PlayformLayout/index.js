import styles from './index.less'
import { Layout } from 'antd'
import GlobalFooter from '@/layouts/components/GlobalFooter/index'
const { Header, Footer, Sider, Content }  = Layout
export default () => {
  return (
    <Layout className={styles.playfromWrapper}>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>
          <GlobalFooter></GlobalFooter>
        </Footer>
      </Layout>
    </Layout>
  )
}