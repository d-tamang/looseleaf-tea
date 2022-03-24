import React from "react";
import TeaItem from "../tea_item"

class BlackTeasIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeas();
  }

  render() {
    let blackTeas = [];
    for (let tea of this.props.teas) {
      if (tea.category === 'Black') {
        blackTeas.push(tea);
      }
    }
    const blackTeaItems = blackTeas.map(tea => (
      <TeaItem key={tea.id} tea={tea} />
    ));

    return (
      <div className="teas-index-container">
        <p>Black Teas</p>
        <div className="teas-index-grid">
          {blackTeaItems}
        </div>
      </div>
    )
  }
}

export default BlackTeasIndex;