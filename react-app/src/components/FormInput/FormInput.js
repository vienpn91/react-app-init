import React from 'react';
import { Field, getIn } from 'formik';
import { func, bool, shape } from 'prop-types';
import _ from 'lodash';
import { Select, DatePicker } from 'antd';
import { InputForm, InputWrap } from './FormInput.style';

export const INPUT_TYPES = {
  TEXT: 'text',
  SELECT: 'select',
  DATE_PICKER: 'datepicker',
};

const FORM_LAYOUT = {
  labelCol: { xs: 24, sm: 24 },
  wrapperCol: { xs: 24, sm: 24 },
};


class FormInput extends React.Component {
  static propTypes = {
    refInput: func,
    shouldRenderFeedback: bool,
    formLayout: shape(),
  }

  static defaultProps = {
    formLayout: FORM_LAYOUT,
    refInput: () => { },
    shouldRenderFeedback: true,
  }


  refFormInput = (input) => {
    const { refInput } = this.props;
    this.input = input;
    refInput(input);
  }

  renderTextInput = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors },
    form,
    ...props
  }) => {
    const {
      label,
      formLayout,
      refInput,
      shouldRenderFeedback,
      ...rest
    } = props;

    const isTouched = getIn(touched, field.name);
    let errorMessage = '';
    let validateStatus = 'success';

    if (isTouched) {
      errorMessage = getIn(errors, field.name);
      if (errorMessage) {
        validateStatus = 'error';
      }
    }

    return (
      <InputWrap
        label={label}
        hasFeedback={shouldRenderFeedback && validateStatus === 'error'}
        validateStatus={validateStatus}
        help={errorMessage}
        {...formLayout}
      >
        <InputForm
          ref={this.refFormInput}
          {...field}
          {...rest}
        />
      </InputWrap>
    );
  };

  renderSelect = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors },
    form,
    formLayout,
    shouldRenderFeedback,
    ...props
  }) => {
    const { disabled, options, label: fieldLabel, placeholder } = props; // required

    const isTouched = getIn(touched, field.name);
    let errorMessage = '';
    let validateStatus = 'success';

    if (isTouched) {
      errorMessage = getIn(errors, field.name);
      if (errorMessage) {
        validateStatus = 'error';
      }
    }

    return (
      <InputWrap
        label={fieldLabel}
        hasFeedback={shouldRenderFeedback && validateStatus === 'error'}
        validateStatus={validateStatus}
        help={errorMessage}
        {...formLayout}
        {...props}
      >
        <Select
          value={field.value ? field.value : undefined}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        >
          {_.map(options, ({ label, value }) => (
            <Select.Option key={value} value={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
      </InputWrap>
    );
  };

  renderDatePicker = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors, setFieldValue },
    formLayout,
    inputSize,
    label,
    shouldRenderFeedback,
    ...rest
  }) => {
    const onChange = (date) => {
      setFieldValue(field.name, date === null ? '' : date);
    };

    const isTouched = getIn(touched, field.name);
    let errorMessage = '';
    let validateStatus = 'success';

    if (isTouched) {
      errorMessage = getIn(errors, field.name);
      if (errorMessage) {
        validateStatus = 'error';
      }
    }

    return (
      <InputWrap
        label={label}
        hasFeedback={shouldRenderFeedback && validateStatus === 'error'}
        validateStatus={validateStatus}
        help={errorMessage}
        {...formLayout}
      >
        <DatePicker
          value={field.value}
          size={inputSize}
          selected={field.value}
          onChange={onChange}
          format="MM/DD/YYYY"
          {...rest}
        />
      </InputWrap>
    );
  };

  renderFormInput = (props) => {
    const { type } = props;
    switch (type) {
      case INPUT_TYPES.TEXT:
        return this.renderTextInput(props);
      case INPUT_TYPES.SELECT:
        return this.renderSelect(props);
      case INPUT_TYPES.DATE_PICKER:
        return this.renderDatePicker(props);
      default:
        return this.renderTextInput(props);
    }
  };

  render() {
    return (
      <Field
        {...this.props}
        component={this.renderFormInput}
      />
    );
  }
}

export default FormInput;
