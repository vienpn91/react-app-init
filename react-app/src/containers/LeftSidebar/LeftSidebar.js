import { connect } from 'react-redux';
import LeftSiderbar from '../../components/LeftSidebar';
import { actions as CampaignActions } from '../../reducers/campaigns';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  openCreateCampaignModal: CampaignActions.openCreateCampaignModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSiderbar);