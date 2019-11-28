import React from "react";
import { Collapse, Icon } from "antd";

import {
  DashboardContainer,
  TitlePage,
  ContentPage,
  ContentPanel,
  CollapseCustomized,
  CardCustomized,
  MetaCustomized,
} from "./Dashboard.style";

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
`;
const { Panel } = Collapse;

class Dashboard extends React.PureComponent {
  render() {
    return (
      <DashboardContainer>
        <TitlePage level={3}>Welcome to SiteVibes</TitlePage>
        <ContentPage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ContentPage>

        <CollapseCustomized
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <Icon type="right" rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel header="Step 1: Install SiteVibes" key="1">
            <React.Fragment>
              <ContentPanel>
                The next step is to install Site Vibes into your website
              </ContentPanel>
              <ContentPanel>
                Click the button below to get your unique pixel to plae in the
                globla header of your websitee
              </ContentPanel>
              <CardCustomized
                hoverable
                cover={<Icon type="code" />}
              >
                <MetaCustomized
                  title="Installation"
                  description="Set up your initial configuration and receive your Site Search installation snippet."
                />
              </CardCustomized>
            </React.Fragment>
          </Panel>
          <Panel header="Step 2: Test and check the results" key="2">
            <ContentPanel>>{text}</ContentPanel>
          </Panel>
          <Panel header="Step 3: Done" key="3">
            <ContentPanel>>{text}</ContentPanel>
          </Panel>
        </CollapseCustomized>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
