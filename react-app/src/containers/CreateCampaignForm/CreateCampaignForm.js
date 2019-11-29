import { connect } from 'react-redux';
import CampaignForm from '../../components/CreateCampaignForm';
import {
  selectors as CampaignSelectors,
  actions as CampaignActions,
} from '../../reducers/campaigns';

const mapStateToProps = (state) => ({
  isCreateCampaignModalOpen: CampaignSelectors.getCreateCampaignModalOpen(state),
});

const mapDispatchToProps = {
  closeCreateCampaignModal: CampaignActions.closeCreateCampaignModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignForm);