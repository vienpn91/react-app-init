import React, { Component } from 'react';
import { Form, Icon } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ShadowScrollbar from '../Scrollbar';
import FormInput from '../FormInput';
import NotificationWidgetItem from '../NotificationWidgetItem';
import { WIDGET_TYPE } from '../../utils/enums';
import {
  NotificationFormWrap,
  NotificationFormHeader,
  NotificationFormContent,
  NotificationFormTitle,
  NotificationFormSubTitle,
  NotificationConfigureWrap,
  NotificationConfigureHeaderWrap,
  NotificationConfigureItemWrap,
  NotificationConfigureItem,
} from './CreateNotificationForm.style';
import {
  GroupAction,
  ButtonPrimary,
} from '../../stylesheets/Button.style';

const initialValues = {
  name: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required('Name is required'),
});

const scrollStyle = {
  width: '100%',
  height: '100vh',
}

const notificationList = [
  {
    label: 'Informational',
    icon: 'info-circle',
    type: WIDGET_TYPE.INFORMATION,
  },
  {
    label: 'Coupon',
    icon: 'info-circle',
    type: WIDGET_TYPE.COUPON,
  },
  {
    label: 'Live Counter',
    icon: 'global',
    type: WIDGET_TYPE.LIVE_COUNTER,
  },
  {
    label: 'Email Collector',
    icon: 'mail',
    type: WIDGET_TYPE.EMAIL_COLLECTOR,
  },
  {
    label: 'Conversion Counter',
    icon: 'dollar',
    type: WIDGET_TYPE.CONVERSIONS_COUNTER,
  },
  {
    label: 'Video',
    icon: 'video-camera',
    type: WIDGET_TYPE.VIDEO,
  },
  {
    label: 'Social Share',
    icon: 'share-alt',
    type: WIDGET_TYPE.SOCIAL_SHARE,
  },
  {
    label: 'Random Review',
    icon: 'control',
    type: WIDGET_TYPE.RANDOM_REVIEW,
  },
  {
    label: 'Countdown Collector',
    icon: 'clock-circle',
    type: WIDGET_TYPE.COUNTDOWN_COLLECTOR,
  },
];

class CreateNotificationForm extends Component {
  state = {
    widgetType: WIDGET_TYPE.INFORMATION,
  }

  onSubmit = (values) => {
    console.log('values', values);
  }

  handleNotificationSelected = (widgetType) => {
    this.setState({
      widgetType,
    })
  }

  renderNotificationItem = (item, index) => {
    const { widgetType } = this.state;
    const { label, icon, type } = item;
    return (
      <NotificationConfigureItem
        key={index}
        onClick={() => this.handleNotificationSelected(type)}
        active={widgetType === type}
      >
        <span>{label}</span>
        <Icon type={icon} />
      </NotificationConfigureItem>
    )
  };

  renderConfigureNotificationForm = () => {
    const { widgetType } = this.state;
    return (
      <NotificationConfigureWrap>
        <NotificationConfigureHeaderWrap>
          <NotificationFormTitle>
            <p>Configure</p>
            <span>
              Choose the notification name and type that you want for your new
              notification
            </span>
          </NotificationFormTitle>

          <NotificationWidgetItem widgetType={widgetType}/>
        </NotificationConfigureHeaderWrap>

        <Formik
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="name"
                label="Name"
              />

              <NotificationFormSubTitle>
                <p>Type</p>
                <span>The type cannot be modified later on.</span>
              </NotificationFormSubTitle>

              <NotificationConfigureItemWrap>
                {notificationList.map(this.renderNotificationItem)}
              </NotificationConfigureItemWrap>

              <GroupAction>
                <ButtonPrimary type="submit">Submit</ButtonPrimary>
              </GroupAction>
            </Form>
          )}
        </Formik>
      </NotificationConfigureWrap>
    )
  };

  render() {
    return (
      <NotificationFormWrap>
        <ShadowScrollbar autoHide style={scrollStyle}>
          <NotificationFormHeader>
            <NotificationFormTitle>
              <p>Add New Notification</p>
              <span>Campaign: Test</span>
            </NotificationFormTitle>

            <button>
              <Icon type='unordered-list' />
              Back to Campaign
            </button>
          </NotificationFormHeader>

          <NotificationFormContent>
            {this.renderConfigureNotificationForm()}
          </NotificationFormContent>
        </ShadowScrollbar>
      </NotificationFormWrap>
    );
  }
}

export default CreateNotificationForm;
