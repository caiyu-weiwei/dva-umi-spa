import { PureComponent, Fragment } from 'react'
import { Form, Icon, Input, Button } from 'antd'
const Item = Form.Item
class Index extends PureComponent{
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const Items = (
      <Fragment>
        <Item>
          {
            getFieldDecorator('account', {
              rules: [{ required: true, message: '请输入git账号！'}],
              initialValue: '2'
            })(
              <Input prefix={<Icon type="github" />} placeholder="Account" />
            )
          }
        </Item>
        <Item>
          <Button type='primary' htmlType="submit">搜索</Button>
        </Item>
      </Fragment>
    )

    return (
      <Form layout='inline' onSubmit={this.handleSubmit}>{Items}</Form>
    )
  }
}

const searchForm = Form.create()(Index)
export default searchForm
 