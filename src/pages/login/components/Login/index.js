import { PureComponent } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { connect } from 'dva'
import styles from './index.less'
  
// @connect()
class Login extends PureComponent{
  
  handleSubmit = e => {
    e.preventDefault()
    const { handleSubmit } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        handleSubmit(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formLayout = 'horizontal'
    return (
      <div className={styles.loginForm}>
        <Form
          onSubmit={this.handleSubmit}
          layout={formLayout}>
          <Form.Item>
            {
              getFieldDecorator('username', {
                initialValue: 'admin',
                rules: [{ required: true, message: '请输入用户名!' }]
              })(<Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />)
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('password', {
                initialValue: 'admin',
                rules: [{ required: true, message: '请输入密码!' }]
              })(<Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />)
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>自动登录</Checkbox>)
            }
            <a className={ styles.loginFormForgot } href="#">
              忘记密码
            </a>
            <Button type="primary" htmlType="submit" className={ styles.loginFormButton }>
              登录
            </Button>
           <a href="#">注册账户</a>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Login)