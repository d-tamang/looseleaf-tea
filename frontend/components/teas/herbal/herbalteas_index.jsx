import React from "react";
import HerbalTeaItem from "./herbaltea_item"

class HerbalTeasIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeas();
  }

  render() {
    let herbalTeas = [];
    for (let tea of this.props.teas) {
      if (tea.category === 'Herbal') {
        herbalTeas.push(tea);
      }
    }
    const herbalTeaItems = herbalTeas.map(tea => (
      <HerbalTeaItem key={tea.id} tea={tea} />
    ));

    return (
      <div className="teas-index-container">
        <p>Herbal Teas</p>
        <div className="teas-index-grid">
          {herbalTeaItems}
        </div>
      </div>
    )
  }
}

export default HerbalTeasIndex;