export const CAMPAIGN_CREATE_CAMPAIGN_MODAL_OPEN = 'campaigns/CAMPAIGN_CREATE_CAMPAIGN_MODAL_OPEN';
export const CAMPAIGN_CREATE_CAMPAIGN_MODAL_CLOSE = 'campaigns/CAMPAIGN_CREATE_CAMPAIGN_MODAL_CLOSE';

export const openCreateCampaignModal = () => ({
  type: CAMPAIGN_CREATE_CAMPAIGN_MODAL_OPEN,
});

export const closeCreateCampaignModal = () => ({
  type: CAMPAIGN_CREATE_CAMPAIGN_MODAL_CLOSE,
});

export const actions = {
  openCreateCampaignModal,
  closeCreateCampaignModal,
};

// selectors
export const getCreateCampaignModalOpen = ({ campaigns }) => campaigns.isCreateCampaignModalOpen;

export const selectors = {
  getCreateCampaignModalOpen,
};

const initialState = {
  isCreateCampaignModalOpen: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CAMPAIGN_CREATE_CAMPAIGN_MODAL_OPEN:
      return {
        ...state,
        isCreateCampaignModalOpen: true,
      };

    case CAMPAIGN_CREATE_CAMPAIGN_MODAL_CLOSE:
      return {
        ...state,
        isCreateCampaignModalOpen: false,
      };

    default:
      return state;
  }
}
