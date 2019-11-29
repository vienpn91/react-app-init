import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Form, Icon } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from '../FormInput';
import {
  ModalHeader,
  ModalContent,
  ModalGroupAction,
} from '../../stylesheets/General.style';
import { ButtonPrimary } from '../../stylesheets/Button.style';
import { CampaignDescription } from './CreateCampaignForm.style';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '20px',
    paddingBottom: '20px',
    width: '100%',
    maxWidth: '540px',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
};

const initialValues = {
  name: '',
  domain: '',
};

const domainPattern = /^([a-zA-Z0-9][a-zA-Z0-9-_]*\.)*[a-zA-Z0-9]*[a-zA-Z0-9-_]*[[a-zA-Z0-9]+$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required('Name is required'),
  domain: Yup.string()
    .matches(domainPattern, 'Domain invalid')
    .required('Domain is required'),
});

class CreateCampaignForm extends Component {
  static propTypes = {
    isCreateCampaignModalOpen: PropTypes.bool,
    closeCreateCampaignModal: PropTypes.func,
  }

  onClose = () => {
    const { closeCreateCampaignModal } = this.props;
    closeCreateCampaignModal();
  }

  onSubmit = (values) => {
    console.log('values', values);
  }

  renderCreateCampainForm = () => (
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
          <FormInput
            type="text"
            name="domain"
            label="Domain / Subdomain"
          />

          <CampaignDescription>
            The domain name of the website where the campaign is going to run.
            (ex: domain.com or subdomain.domain.com ) Keep in mind that notifications will
            NOT work on other domains other than what you write here.
          </CampaignDescription>

          <ModalGroupAction>
            <ButtonPrimary type="submit">Submit</ButtonPrimary>
          </ModalGroupAction>
        </Form>
      )}
    </Formik>
  )

  render() {
    const { isCreateCampaignModalOpen, closeCreateCampaignModal } = this.props;
    return (
      <Modal
        isOpen={isCreateCampaignModalOpen}
        onRequestClose={closeCreateCampaignModal}
        style={modalStyles}
        ariaHideApp={false}
      >
        <ModalHeader>
          Create New Campaign
          <Icon onClick={this.onClose} type="close" />
        </ModalHeader>
        <ModalContent>
          {this.renderCreateCampainForm()}
        </ModalContent>
      </Modal>
    );
  }
}

export default CreateCampaignForm;