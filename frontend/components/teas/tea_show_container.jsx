import { connect } from 'react-redux';
import { fetchTea } from '../../actions/tea_actions';
import TeaItemShow from './tea_item_show';
import { createCartItem } from '../../actions/cart_item_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    tea: state.entities.teas[ownProps.match.params.teaId],
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTea: teaId => dispatch(fetchTea(teaId)),
    createCartItem: (userId, teaId, price, size) => dispatch(createCartItem(userId, teaId, price, size))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaItemShow);