import React, { Component } from 'react';
import { Form } from 'antd';

import PaymentForm from '../PaymentForm';
import PaymentInfo from '../PaymentInfo';
import {
  PaymentPageContainer,
  PaymnetHeaderWrap,
  PaymentContenWrap,
} from './PaymentPage.style';

const WrapPaymentInfo = Form.create()(PaymentInfo);

class PaymentPage extends Component {
  render() {
    return (
      <PaymentPageContainer>
        <PaymnetHeaderWrap>
          <p>Upgrade <span>Thanx Media</span> to Standard</p>
        </PaymnetHeaderWrap>

          <PaymentContenWrap>
            <PaymentForm />
            <WrapPaymentInfo />
          </PaymentContenWrap>
      </PaymentPageContainer>
    );
  }
}

export default PaymentPage;