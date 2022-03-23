import React from "react";
import GreenTeaItem from "./greentea_item"

class GreenTeasIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeas();
  }

  render() {
    let greenTeas = [];
    for (let tea of this.props.teas) {
      if (tea.category === 'Green') {
        greenTeas.push(tea);
      }
    }
    const greenTeaItems = greenTeas.map(tea => (
      <GreenTeaItem key={tea.id} tea={tea} />
    ));

    return (
      <div className="teas-index-container">
        <p>Green Teas</p>
        <div className="teas-index-grid">
          {greenTeaItems}
        </div>
      </div>
    )
  }
}

export default GreenTeasIndex;