import React from 'react'
import { Form, Icon, Input, Button , message } from 'antd';
import { withRouter } from 'react-router-dom';
import { loginApi } from '@/service/allApi';


@withRouter
class NormalLoginForm extends React.Component {
   handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields( async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const res = await loginApi( values );
        console.log( res );
        if ( res.data.code === 0 ) {
          window.localStorage.setItem('djb_token' , res.data.data.token );
          message.success('登录成功');
          this.props.history.replace('/');
        } else {
          message.error('账号或密码错误');
        }
        
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;