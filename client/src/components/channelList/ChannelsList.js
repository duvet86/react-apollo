import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const ChannelsList = ({ channels }) => (
  <ListGroup>
    {channels.map(ch => <ListGroupItem key={ch.id}>{ch.name}</ListGroupItem>)}
  </ListGroup>
);

ChannelsList.propTypes = {
  channels: PropTypes.array.isRequired
};

export default ChannelsList;
