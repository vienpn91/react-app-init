import React, { Component } from 'react';
import { Form, Input, Col, Row, Icon, DatePicker } from 'antd';

import {
  PaymentFormItem,
  PaymentFormTitle,
  PaymentFormSubTitle,
  PaymentSubContent,
} from '../PaymentPage/PaymentPage.style';

const { MonthPicker } = DatePicker;

class PaymentMethodForm extends Component {
  render() {
    return (
      <PaymentFormItem>
        <PaymentFormTitle>
          <span>2. Payment Method</span>
          <PaymentFormSubTitle>
            <Icon type="lock" />
            Secure Form
          </PaymentFormSubTitle>
        </PaymentFormTitle>

        <Form.Item label="Name">
          <Input
            type="text"
            name="userName"
          />
        </Form.Item>

        <Row gutter={[16, 0]}>
          <Col span={14}>
            <Form.Item label="Card Number">
              <Input
                type="number"
                name="cardNumber"
              />
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="Expiration">
              <MonthPicker format="MM/YY" placeholder="MM / YY" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 0]}>
          <Col span={14}>
            <Form.Item label="CVV">
              <Input
                type="text"
                name="CVV"
              />
              <PaymentSubContent>3 digits on back</PaymentSubContent>
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="Postal Code (optional)">
              <Input
                type="number"
                name="postalCode"
              />
            </Form.Item>
          </Col>
        </Row>
      </PaymentFormItem>
    );
  }
}

export default PaymentMethodForm;