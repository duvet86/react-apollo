import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";

import ItemTypes from "components/pageBuilder/ItemTypes";

const style = {
  border: "1px solid gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move"
};

const componentSource = {
  beginDrag({ id, name }) {
    return {
      id: id,
      name: name
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert(`You dropped ${item.name} into ${dropResult.name}!`);
    }
  }
};

const PBComponent = ({ isDragging, connectDragSource, name }) => {
  const opacity = isDragging ? 0.4 : 1;

  return connectDragSource(
    <div style={{ ...style, opacity }}>
      {name}
    </div>
  );
};

PBComponent.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default DragSource(
  ItemTypes.COMPONENT,
  componentSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(PBComponent);
