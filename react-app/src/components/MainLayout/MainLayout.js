import React, { PureComponent } from 'react';
import LeftSiderbar from '../../containers/LeftSidebar';
import {
  PrimaryLayout,
  RightContent
} from './MainLayout.style';

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
