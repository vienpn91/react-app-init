import React from "react";
import { Collapse, Icon, Card } from "antd";

import { DashboardContainer, TitlePage, ContentPage } from "./Dashboard.style";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const { Panel } = Collapse;
const { Meta } = Card;
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

        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <Icon type="right" rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel
            header="Step 1: Install SiteVibes"
            key="1" 
          >
            <React.Fragment>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Icon type="code" />}
            >
              <Meta title="Installation" description="Set up your initial configuration and receive your Site Search installation snippet." />
            </Card>

            </React.Fragment>
          </Panel>
          <Panel
            header="Step 2: Test and check the results"
            key="2"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="Step 3: Done"
            key="3"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
