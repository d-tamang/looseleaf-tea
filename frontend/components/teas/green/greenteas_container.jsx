import { connect } from 'react-redux';
import GreenTeasIndex from './greenteas_index';
import { fetchTeas } from '../../../actions/tea_actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(GreenTeasIndex);