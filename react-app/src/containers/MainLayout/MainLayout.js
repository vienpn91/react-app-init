import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';

export const mapStateToProps = () => ({});

export default withRouter(connect(mapStateToProps)(MainLayout));
