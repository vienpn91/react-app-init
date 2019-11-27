import React from "react";
import { Menu, Icon, Select } from "antd";

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

class LeftSiderbar extends React.PureComponent {
  handleChange = value => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <SiderBarContainer breakpoint="lg" collapsedWidth="0" theme="light">
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
        <MenuCustomized
          onClick={this.handleClick}
          defaultSelectedKeys={["21"]}
          defaultOpenKeys={['manages','sub1','interfaces']}
          mode="inline"
        >
          <Menu.Item key="21">
            <Icon type="eye" />
            Overview
          </Menu.Item>
          <SubMenuCustomized key="sub1" title={<span>CAMPAIGNS</span>}>
            <Menu.ItemGroup key="g1">
              <Menu.Item key="112">
                <Icon type="line-chart" />
                <span>Campaign Name 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="line-chart" />
                <span>Campaign Name 1</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="plus" />
                <span>Add Another Campaign</span>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenuCustomized>
          <SubMenuCustomized key="manages" title={<span>MANAGER</span>}>
            <Menu.ItemGroup key="m1" title="manager">
              <Menu.Item key="1">
                <Icon type="credit-card" />
                <span>Acount</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="switcher" />
                <span>Plan</span>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenuCustomized>
          <SubMenuCustomized key="interfaces" title={<span>INTERFACE</span>}>
            <Menu.ItemGroup key="f1" title="interfaces">
              <Menu.Item key="1">
                <Icon type="tool" />
                <span>Install SiteVibes</span>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenuCustomized>
        </MenuCustomized>
      </SiderBarContainer>
    );
  }
}

export default LeftSiderbar;
