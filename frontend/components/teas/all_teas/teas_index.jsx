import React from "react";
import TeaItem from "../tea_item";

class TeasIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeas();
  }

  render() {
    const teaItems = this.props.teas.map(tea => (
      <TeaItem key={tea.id} tea={tea} />
    ));

    return (
      <div className="teas-index-container">
        <p>All Loose Leaf Teas</p>
        <div className="teas-index-grid">
          {teaItems}
        </div>
      </div>
    )
  }
}

export default TeasIndex;