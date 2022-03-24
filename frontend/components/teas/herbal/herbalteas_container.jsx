import { connect } from 'react-redux';
import { fetchTeas } from '../../../actions/tea_actions';
import HerbalTeasIndex from './herbalteas_index';

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

export default connect(mapStateToProps, mapDispatchToProps)(HerbalTeasIndex);