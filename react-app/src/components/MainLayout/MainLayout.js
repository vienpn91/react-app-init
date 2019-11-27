import React, { PureComponent } from 'react';
import { Layout } from 'antd';

import { PrimaryLayout, RightContent } from './MainLayout.style';
import LeftSiderbar from '../LeftSidebar/LeftSiderbar';

export default class MainLayout extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <PrimaryLayout>
        <LeftSiderbar />
        <RightContent>
          {this.props.children}
        </RightContent>
      </PrimaryLayout>
    );
  }
}
