import { connect } from 'react-redux';
import { fetchTeas, fetchTea } from '../../../actions/tea_actions';
import TeasIndex from './teas_index';

const mapStateToProps = state => {
  return {
    teas: Object.values(state.entities.teas)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeas: () => dispatch(fetchTeas())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeasIndex);