import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import { DropTarget, DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Card from "components/presentationals/Card";
import ItemTypes from "components/presentationals/ItemTypes";

const style = {
  width: 400
};

const cardTarget = {
  drop() {}
};

class SortableContainer extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.findCard = this.findCard.bind(this);
    this.state = {
      cards: [
        {
          id: 1,
          text: "Write a cool JS library"
        },
        {
          id: 2,
          text: "Make it generic enough"
        },
        {
          id: 3,
          text: "Write README"
        },
        {
          id: 4,
          text: "Create some examples"
        },
        {
          id: 5,
          text: "Spam in Twitter and IRC to promote it"
        },
        {
          id: 6,
          text: "???"
        },
        {
          id: 7,
          text: "PROFIT"
        }
      ]
    };
  }

  render() {
    const { connectDropTarget } = this.props;
    const { cards } = this.state;

    return connectDropTarget(
      <div style={style}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            text={card.text}
            moveCard={this.moveCard}
            findCard={this.findCard}
          />
        ))}
      </div>
    );
  }

  moveCard(id, atIndex) {
    const { card, index } = this.findCard(id);
    this.setState(
      update(this.state, {
        cards: {
          $splice: [[index, 1], [atIndex, 0, card]]
        }
      })
    );
  }

  findCard(id) {
    const { cards } = this.state;
    const card = cards.filter(c => c.id === id)[0];

    return {
      card,
      index: cards.indexOf(card)
    };
  }
}

SortableContainer.propTypes = {
  connectDropTarget: PropTypes.func.isRequired
};

export default DragDropContext(HTML5Backend)(
  DropTarget(ItemTypes.CARD, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))(SortableContainer)
);
