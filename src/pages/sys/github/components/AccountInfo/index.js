import { PureComponent, Fragment } from 'react'
import { Skeleton, Card, Avatar, Row, Col } from 'antd'
import styles from './index.less'
const { Meta } = Card
class AccountInfo extends PureComponent{

  createCols = () => {
    const layout = {sm: 24, md: 24, lg: 7, xl: 7}
    return (
      <Fragment>
        <Col {...layout}>
          <Card>
            <Skeleton loading={false} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
            </Skeleton>
          </Card>
        </Col>
        <Col {...layout}>
          <Card>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col {...layout}>
          <Card>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Fragment>
    )
  }

  render() {
    const { accountInfo } = this.props
    const Cols = this.createCols(accountInfo)
    return (
      <Row className={styles.accountInfo} type="flex" justify="space-between">
        {Cols}
      </Row>
    )
  }
}

export default AccountInfo