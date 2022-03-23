import { connect } from 'react-redux';
import TeasIndex from './teas_index';
import { fetchTeas, fetchTea } from '../../../actions/tea_actions';

const mapStateToProps = state => {
  return {
    teas: Object.values(state.entities.teas)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeas: () => dispatch(fetchTeas()),
    fetchTea: teaId => dispatch(fetchTea(teaId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeasIndex);