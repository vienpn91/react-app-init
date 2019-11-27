import styled from 'styled-components';
import { Layout, Select, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

export const SiderBarContainer = styled(Sider).attrs({
  className: 'siderbar-container',  
})`
  width: 240px!important;
  flex: 0 0 240px!important;
  min-width: 240px!important;
  max-width: 240px!important;
  background-color: #9b59b6;
  left: 0;
  overflow: auto;
  height: 100%;
  position: fixed;
`;

export const GroupSelect = styled.section.attrs({
  className: 'group-select',
})`
  margin-bottom: 25px;
  background: ${props => props.theme.colorStyled.ColorBgActive};
  padding: 20px 5px;

`;
export const SubTextSelect = styled.div.attrs({
  className: 'sub-text-select',
})`
  color:  ${props => props.theme.colorStyled.ColorTextSelect};
  padding: 0 12px;
  position: relative;
  top: -5px;
`;

export const TextSelect = styled.span.attrs({
  className: 'text-select',
})`
  margin-left: 8px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const SelectCustomized = styled(Select).attrs({
  className: 'select-customized',
})`
  width: 100%;
  .ant-select{

  } 
  .ant-select-selection--single{
    background: transparent;
    border-radius: 0px;
    color: ${props => props.theme.colorStyled.ColorWhite};
    box-shadow: none;
    border: none;
    .ant-select-arrow{
      color: ${props => props.theme.colorStyled.ColorWhite};
    }
  }
`;

export const MenuCustomized = styled(Menu).attrs({
  className: 'menu-customized',
})`
  background-color: ${props => props.theme.colorStyled.ColorBgSide};
  border-right: none;
  .ant-menu{
    color: ${props => props.theme.colorStyled.ColorWhite};
    .anticon{
      color: ${props => props.theme.colorStyled.ColorIcon};
      
    }
  }

  .ant-menu-submenu-arrow{
    display: none;
  }
  &.ant-menu:not(.ant-menu-horizontal) {
    .ant-menu-item-selected {
      background: ${props => props.theme.colorStyled.ColorBgActive};
      color: ${props => props.theme.colorStyled.ColorWhite};
      width: 100%;
      font-weight: 600;
      &:after{
        display: none;
      }
    }
  }
  .ant-menu-sub{
    &.ant-menu-inline{
      .ant-menu-item-group-title{
        overflow: hidden;
        display: none;
      }
    } 
  }
  .ant-menu-submenu {
    > .ant-menu {
      background-color: ${props => props.theme.colorStyled.ColorBgSide};
    }
  } 
  &.ant-menu-inline {
    .ant-menu-item{
      &:hover{
        color: ${props => props.theme.colorStyled.ColorWhite};
        background: ${props => props.theme.colorStyled.ColorBgActive};
      }
    }
    .ant-menu-item-active{
      &:hover{
        color: ${props => props.theme.colorStyled.ColorWhite};
        background: ${props => props.theme.colorStyled.ColorBgActive};
      }
    }
    .ant-menu-item:not(:last-child){
      margin-bottom: 25px;
      margin-top: 0;
      padding: 0 15px!important;
    }
    .ant-menu-item-group-list{
      .ant-menu-item {
        margin: 0px;
        padding: 0 15px!important;
        width: 100%;
      }
    }
    .ant-menu-submenu-title{
      margin: 0px;
      color: ${props => props.theme.colorStyled.ColorWhite};
      font-weight: 600;
      padding: 0 15px!important;
      width: 100%;
    }
  }
`;

export const SubMenuCustomized = styled(SubMenu).attrs({
  className: 'sub-menu-customized',
})`
  margin-bottom: 15px;
`;

