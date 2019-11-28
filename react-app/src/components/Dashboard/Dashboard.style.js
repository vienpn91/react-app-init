import styled from "styled-components";
import { Layout, Typography, Collapse, Card } from "antd";

const { Title, Text } = Typography;
const { Content } = Layout;
const { Meta } = Card;

// Using themes color:  ${props => props.theme.colorStyled.ColorWhite};

export const DashboardContainer = styled(Content).attrs({
  className: "dashboard-container-content"
})`
  padding: 2em;
  background-color: ${props => props.theme.colorStyled.ColorWhite};
`;

export const TitlePage = styled(Title).attrs({
  className: "title-default"
})`
  color: ${props => props.theme.colorStyled.ColorSecond};
`;

export const ContentPage = styled(Text).attrs({
  className: "text-default"
})`
  color: ${props => props.theme.colorStyled.ColorGrey};
  max-width: 590px;
  display: inline-block;
  margin: 1em 0 3em 0;
  line-height: 27px;
`;

export const ContentPanel = styled(Text).attrs({
  className: "text-panel"
})`
  color: ${props => props.theme.colorStyled.ColorGrey};
  display: inline-block;
  margin: 0 0 2em;
  line-height: 27px;
`;

export const CollapseCustomized = styled(Collapse).attrs({
  className: "collapse-customized"
})`
  &.ant-collapse {
    max-width: 680px;
    & > .ant-collapse-item {
      & > .ant-collapse-header {
        padding: 12px 0px;
        color: ${props => props.theme.colorStyled.ColorLink};
        font-size: 18px;
        .ant-collapse-arrow {
          color: ${props => props.theme.colorStyled.ColorGrey};
          left: calc(100% - 12px);
          font-size: 16px;
        }
      }
    }
  }
  &.ant-collapse-borderless {
    & > .ant-collapse-item {
      & > .ant-collapse-content {
        & > .ant-collapse-content-box {
          padding: 0;
        }
      }
    }
  }
`;

export const CardCustomized = styled(Card).attrs({
  className: "card-customized"
})`
  color: ${props => props.theme.colorStyled.ColorGrey};
  display: inline-block;
  width: 260px;
  margin: 1em 0em 3em 0;
  border-radius: 5px;
  box-shadow: 1px 1px 9px -3px #0000003b;
  .ant-card-cover{
    .anticon{
      font-size: 80px;
      margin: 30px 0px 10px 0px;
    }
  }
`;
export const MetaCustomized = styled(Meta).attrs({
  className: "meta-customized"
})`
    text-align: center;
  color: ${props => props.theme.colorStyled.ColorGrey};
 .ant-card-meta-title{
  color: ${props => props.theme.colorStyled.ColorLink};
 }
`;
