import React from "react";
import { Row, Col, Table } from "react-bootstrap";

import SimpleLineChart from "components/charting/SimpleLineChart";
import SpecifiedDomainRadarChart from "components/charting/SpecifiedDomainRadarChart";

const DashBoard = () => (
  <div>
    <h1 className="page-header">Dashboard</h1>
    <Row className="placeholders">
      <Col xs={6} md={6}>
        <SimpleLineChart />
      </Col>
      <Col xs={6} md={6}>
        <SpecifiedDomainRadarChart />
      </Col>
    </Row>
    <h2 className="sub-header">Section title</h2>
    <Table responsive striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default DashBoard;
