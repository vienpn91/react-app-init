import React from "react";
import PropTypes from 'prop-types';
import { Menu, Icon, Select } from "antd";

import CreateCampaignForm from '../../containers/CreateCampaignForm';
import {
  SiderBarContainer,
  GroupSelect,
  SubTextSelect,
  TextSelect,
  SelectCustomized,
  MenuCustomized,
  SubMenuCustomized
} from "./LeftSiderbar.styled";


const { Option, OptGroup } = Select;
const campaignMenu = [
  {
    name: 'Campaign Name 1',
    icon: 'line-chart',
  },
  {
    name: 'Campaign Name 2',
    icon: 'line-chart',
  },
]

const managerMenu = [
  {
    name: 'Account',
    icon: 'credit-card',
  },
  {
    name: 'Plan',
    icon: 'switcher',
  },
]

class LeftSiderbar extends React.PureComponent {
  static propTypes = {
    openCreateCampaignModal: PropTypes.func,
  }

  renderGroupSelect = () => (
    <GroupSelect>
      <SelectCustomized
        size={"large"}
        defaultValue="lucy"
        onChange={this.handleChange}
      >
        <OptGroup label="Manager">
          <Option value="jack">Thanx Test Blog Select</Option>
          <Option value="lucy">John Test Blog Select</Option>
        </OptGroup>
        <OptGroup label="Engineer">
          <Option value="Yiminghe">Yiminghe Test Blog Select</Option>
        </OptGroup>
      </SelectCustomized>
      <SubTextSelect>
        <Icon type="team" />
        <TextSelect>My Acount</TextSelect>
      </SubTextSelect>
    </GroupSelect>
  )

  onOpenCreateCampaignModal = () => {
    const { openCreateCampaignModal } = this.props;
    openCreateCampaignModal();
  }

  renderCampaignMenuItem = (item) => (
    <Menu.Item key={item.name}>
      <Icon type={item.icon} />
      <span>{item.name}</span>
    </Menu.Item>
  )

  renderManagerMenuItem = (item) => (
    <Menu.Item key={item.name}>
      <Icon type={item.icon} />
      <span>{item.name}</span>
    </Menu.Item>
  )

  renderMainMenu = () => (
    <MenuCustomized
      defaultSelectedKeys={["overview"]}
      defaultOpenKeys={['campaign', 'manager', 'interface']}
      mode="inline"
    >
      <Menu.Item key="overview">
        <Icon type="eye" />
        Overview
          </Menu.Item>

      <SubMenuCustomized key="campaign" title={<span>CAMPAIGNS</span>}>
        <Menu.ItemGroup key="g1">
          {campaignMenu.map(this.renderCampaignMenuItem)}

          <Menu.Item onClick={this.onOpenCreateCampaignModal}>
            <Icon type="plus" />
            <span>Add Another Campaign</span>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenuCustomized>

      <SubMenuCustomized key="manager" title={<span>MANAGER</span>}>
        <Menu.ItemGroup key="m1" title="manager">
          {managerMenu.map(this.renderManagerMenuItem)}
        </Menu.ItemGroup>
      </SubMenuCustomized>

      <SubMenuCustomized key="interface" title={<span>INTERFACE</span>}>
        <Menu.ItemGroup key="f1" title="interfaces">
          <Menu.Item key="1">
            <Icon type="tool" />
            <span>Install SiteVibes</span>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenuCustomized>
    </MenuCustomized>
  )

  render() {
    return (
      <SiderBarContainer breakpoint="lg" collapsedWidth="0" theme="light">
        {this.renderGroupSelect()}
        {this.renderMainMenu()}

        <CreateCampaignForm />
      </SiderBarContainer>
    );
  }
}

export default LeftSiderbar;
