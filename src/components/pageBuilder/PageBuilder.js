import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import PBComponent from "components/pageBuilder/PBComponent";
import PBDroppableArea from "components/pageBuilder/PBDroppableArea";

const PageBuilder = ({ components }) => (
  <div>
    <h1 className="page-header">Page Builder</h1>
    <DragDropContextProvider backend={HTML5Backend}>
      <Row>
        <Col md={2}>
          {components.map(component => (
            <PBComponent
              key={component.id}
              id={component.id}
              name={component.name}
            />
          ))}
        </Col>
        <Col md={10}>
          <PBDroppableArea />
        </Col>
      </Row>
    </DragDropContextProvider>
  </div>
);

PageBuilder.propTypes = {
  components: PropTypes.array.isRequired
};

export default PageBuilder;
