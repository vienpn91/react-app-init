
import styled from 'styled-components';
import { Layout, Typography } from 'antd';

const { Title, Text } = Typography;
const { Content } = Layout;

// Using themes color:  ${props => props.theme.colorStyled.ColorWhite};

export const DashboardContainer = styled(Content).attrs({
  className: 'dashboard-container-content'
})`
  padding: 1.5em;
  background-color: ${props => props.theme.colorStyled.ColorWhite};
`;

export const TitlePage = styled(Title).attrs({
  className: 'title-default',
})`
`;

export const ContentPage = styled(Text).attrs({
  className: 'text-default',
})`
  
`;
