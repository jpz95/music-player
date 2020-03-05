const suppressUnrecognizedTagWarning = process.env
  .REACT_APP_SUPPRESS_UNRECOGNIZED_TAG_WARNING === "true";

export default {
  app: {
    suppressUnrecognizedTagWarning
  }
};