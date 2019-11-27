import React, { Component } from 'react';
import { Form, Input, Col, Row, Select } from 'antd';

import {
  PaymentFormItem,
  PaymentFormTitle,
} from '../PaymentPage/PaymentPage.style';

const { Option } = Select;

class CompanyInfoForm extends Component {
  state = {
    country: '',
  };

  handleCountryChange = countryValue => {
    this.setState({
      country: countryValue,
    });
  };

  renderCountryOption = () => {
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator('country', {
      initialValue: 'Choose an option...',
    })(
      <Select
        style={{ width: '100%' }}
        onChange={this.handleCountryChange}
      >
        <Option value="Viet Nam">Viet Nam</Option>
        <Option value="USA">USA</Option>
      </Select>,
    );
    return prefixSelector;
  }

  render() {
    const { country } = this.state;
    return (
      <PaymentFormItem>
        <PaymentFormTitle>
          <span>1. Company Info</span>
        </PaymentFormTitle>

        <Form.Item label="Country">
          {this.renderCountryOption()}
        </Form.Item>

        <Form.Item label="Currency">
          {country
            ? <Input
              type="text"
              name="currency"
            />
            : <span>To choose a currency, you'll first need to select a country</span>
          }
        </Form.Item>

        <Form.Item label="Company Name">
          <Input
            type="text"
            name="companyName"
          />
        </Form.Item>

        <Row gutter={[16, 0]}>
          <Col span={12}>
            <Form.Item label="Street Address">
              <Input
                type="text"
                name="streetAddress"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Suite / Unit (optional)">
              <Input
                type="text"
                name="suiteUnit"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 0]}>
          <Col span={12}>
            <Form.Item label="City">
              <Input
                type="text"
                name="city"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="State / Province (optional)">
              <Input
                type="text"
                name="stateProvince"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Post Code (optional)">
          <Input
            type="text"
            name="postCode"
          />
        </Form.Item>
      </PaymentFormItem>
    );
  }
}

export default CompanyInfoForm;