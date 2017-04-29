import React from "react";
import PropTypes from "prop-types";
import { Well } from "react-bootstrap";

const Loading = ({ children, loading, error }) => {
  if (loading) {
    return <Well>Loading</Well>;
  }
  if (error) {
    return <Well>{error.message}</Well>;
  }
  return children;
};

Loading.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string
  })
};

export default Loading;
