import React from "react";
import PropTypes from "prop-types";

const ChannelsList = ({ channels }) => (
  <ul className="list-group">
    {channels.map(ch => (
      <li className="list-group-item" key={ch.id}>{ch.name}</li>
    ))}
  </ul>
);

ChannelsList.propTypes = {
  channels: PropTypes.array.isRequired
};

export default ChannelsList;
