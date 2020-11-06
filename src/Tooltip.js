import PropTypes from "prop-types";
import React from "react";

import { Tooltip as TippyTooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import styled from "styled-components";

const StyledTooltip = styled(TippyTooltip)`
  display: inline-flex !important;
`;

export const Tooltip = ({ tip, position, children }) => (
  <StyledTooltip size="regular" title={tip} arrow={true} position={position}>
    {children}
  </StyledTooltip>
);

Tooltip.propTypes = {
  tip: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  children: PropTypes.node,
};

Tooltip.defaultProps = {
  position: "top",
};
