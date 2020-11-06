import { get } from "lodash-es";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors } from "./theme";
import { Tooltip } from "./Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getIconColor = ({ color, theme }) =>
  get(theme, ["color", color], "inherit");
const getIconHoverColor = ({ color, theme }) =>
  get(theme, ["color", `${color}Dark`], "inherit");

const fixedWidth = css`
  width: 8px;
  text-align: center;
  display: inline-block;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${getIconColor};
  ${(props) => (props.hoverable || props.onClick ? "cursor: pointer;" : "")};

  :hover {
    color: ${getIconHoverColor};
  }
`;

export const Icon = ({
  className,
  color,
  faStyle,
  fixedWidth,
  hoverable,
  name,
  shade,
  style,
  tip,
  tipPlacement,
  onClick,
}) => {
  const handleClick = useCallback((e) => {
    onClick(e);
  }, []);

  const icon = (
    <StyledIcon
      className={className}
      color={color}
      fixedWidth={fixedWidth}
      icon={[faStyle, name]}
      hoverable={hoverable}
      style={style}
      onClick={onClick ? handleClick : null}
      shade={shade}
    />
  );

  if (tip) {
    return (
      <Tooltip position={tipPlacement || "top"} tip={tip}>
        {icon}
      </Tooltip>
    );
  }

  // return icon;

  return <FontAwesomeIcon icon={["fas", "github"]} />;
};

Icon.propTypes = {
  color: PropTypes.oneOf(colors),
  name: PropTypes.string.isRequired,
  tip: PropTypes.node,
  tipPlacement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  faStyle: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  fixedWidth: PropTypes.bool,
  style: PropTypes.object,
};

Icon.defaultProps = {
  color: "red",
  faStyle: "fas",
  fixedWidth: false,
  tipPlacement: "top",
};

export const LinkIcon = ({ to, replace, ...props }) => (
  <Link to={to} replace={replace}>
    <Icon {...props} hoverable />
  </Link>
);
