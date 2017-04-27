import React from "react";
import PropTypes from "prop-types";

const AddChannel = ({ handleKeyUp }) => {
  return (
    <div className="form-inline add-channel-form">
      <div className="form-group">
        <label htmlFor="newChannel">New Channel</label>
        <input
          id="newChannel"
          type="text"
          className="form-control mx-sm-3"
          placeholder="New channel"
          onKeyUp={handleKeyUp}
        />
      </div>
    </div>
  );
};

AddChannel.propTypes = {
  handleKeyUp: PropTypes.func.isRequired
};

export default AddChannel;
