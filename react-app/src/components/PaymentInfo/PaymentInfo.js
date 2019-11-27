import React, { Component } from 'react';
import { Select } from 'antd';

import {
  PaymentInfoContainer,
  PaymentInfoWrap,
  PaymentInfoHeaderWrap,
  PaymentInfoTitle,
  PaymentInfoDetailWrap,
  PaymentInfoMathWrap,
  PaymentInfoMath,
  PaymentInfoMathTotal,
  PaymentText,
  PaymentInfoDescription,
  PaymentInfoCredit,
  PaymentDescription,
  PaymentInfoTax,
  PaymentInfoTotal,
} from './PaymentInfo.style';

const { Option } = Select;

class PaymentInfo extends Component {
  renderBillMethod = () => {
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator('country', {
      initialValue: 'Billed monthly',
    })(
      <Select style={{ width: '125px' }} className="bill-method">
        <Option value="Billed monthly">Billed monthly</Option>
        <Option value="Billed weekly">Billed weekly</Option>
      </Select>,
    );
    return prefixSelector;
  }

  renderPaymentInfoHeader = () => (
    <PaymentInfoHeaderWrap>
      <PaymentInfoTitle>SiteVibes Standard</PaymentInfoTitle>
      {this.renderBillMethod()}
    </PaymentInfoHeaderWrap>
  );

  renderPaymentInfoMath = () => (
    <PaymentInfoMathWrap>
      <PaymentInfoMath>
        <PaymentText>$8 USD</PaymentText>
        <span>&#215;</span>
        <PaymentText>1 active member</PaymentText>
        <span>&#215;</span>
        <PaymentText>1 month</PaymentText>
      </PaymentInfoMath>
      <PaymentInfoMathTotal>$8 USD</PaymentInfoMathTotal>
    </PaymentInfoMathWrap>
  )

  renderPaymentInfoDetail = () => (
    <PaymentInfoDetailWrap>
      {this.renderPaymentInfoMath()}

      <PaymentInfoDescription>
        <PaymentInfoCredit>
          <span>Your credits</span>
          <span>-$8 USD</span>
        </PaymentInfoCredit>
        <PaymentDescription>
          You have <span>$142 USD</span> in credit remaining, and it&#39;ll be applied to your next payment
        </PaymentDescription>
      </PaymentInfoDescription>

      <PaymentInfoTax>
        <span>TAX</span>
        <span>{`$2 USD` || `-`}</span>
      </PaymentInfoTax>

      <PaymentInfoTotal>
        <span>Due today</span>
        <span>$0 USD</span>
      </PaymentInfoTotal>
    </PaymentInfoDetailWrap>
  )

  render() {
    return (
      <PaymentInfoContainer>
        <PaymentInfoWrap>
          {this.renderPaymentInfoHeader()}

          {this.renderPaymentInfoDetail()}
        </PaymentInfoWrap>
      </PaymentInfoContainer>
    );
  }
}

export default PaymentInfo;