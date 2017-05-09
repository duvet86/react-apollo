import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import PBComponent from "components/pageBuilder/PBComponent";
import PBDroppableArea from "components/pageBuilder/PBDroppableArea";

export default class PageBuilderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          id: 1,
          name: "Glass"
        },
        {
          id: 2,
          name: "Banana"
        },
        {
          id: 3,
          name: "Paper"
        }
      ]
    };
  }

  render() {
    const { components } = this.state;
    return (
      <div>
        <h1 className="page-header">Page Builder!</h1>
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
  }
}
