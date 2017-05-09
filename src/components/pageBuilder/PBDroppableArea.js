import React from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";

import ItemTypes from "components/pageBuilder/ItemTypes";

const style = {
  border: "1px dashed gray",
  padding: "1rem",
  textAlign: "center"
};

const boxTarget = {
  drop() {
    return { name: "PBDroppableArea" };
  }
};

const PBDroppableArea = ({ canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver;

  let backgroundColor;
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return connectDropTarget(
    <div style={{ ...style, backgroundColor }}>
      {isActive ? "Release to drop" : "Drag a Component here"}
    </div>
  );
};

PBDroppableArea.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.COMPONENT, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(PBDroppableArea);
