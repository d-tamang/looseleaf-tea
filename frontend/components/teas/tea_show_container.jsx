import { connect } from 'react-redux';
import { fetchTea } from '../../actions/tea_actions';
import TeaItemShow from './tea_item_show';

const mapStateToProps = (state, ownProps) => {
  return {
    teas: Object.values(state.entities.teas),
    tea: state.entities.teas[ownProps.match.params.teaId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTea: teaId => dispatch(fetchTea(teaId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaItemShow);