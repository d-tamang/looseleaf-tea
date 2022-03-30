import { connect } from 'react-redux';
import SearchBar from './searchbar';

const mapStateToProps = state => {
  return {
    teas: Object.values(state.entities.teas)
  };
};

export default connect(mapStateToProps, null)(SearchBar);