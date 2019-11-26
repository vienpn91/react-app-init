import React, { Component } from 'react';
import { Form, Input, Col, Row, Icon, Button } from 'antd';

class RegisterForm extends Component {
  render() {
    return (
      <Form>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="First Name">
              <Input
                placeholder="First Name"
                type="text"
                id="firstName"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Last Name">
              <Input
                placeholder="Last Name"
                type="text"
                id="lastName"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Email Address">
          <Input
            placeholder="Email Address"
            type="email"
            id="emailAddress"
          />
        </Form.Item>

        <Form.Item label="Company Name">
          <Input
            placeholder="Company Name"
            type="text"
            id="companyName"
          />
        </Form.Item>

        <Form.Item label="Password" hasFeedback>
          <Input
            placeholder="Password"
            type="password"
            id="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>

        <Form.Item className="submit-button">
          <Button type="primary" htmlType="submit">
            Create Account
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default RegisterForm;