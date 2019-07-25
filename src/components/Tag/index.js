import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { height, borderRadius } from "styled-system"

import { Text } from "../Typography"

export const DEFAULT_VARIANT = "default"
export const ACTIVE_VARIANT = "active"
export const OUTLINE_VARIANT = "outline"
export const ALL_VARIANTS = [DEFAULT_VARIANT, ACTIVE_VARIANT, OUTLINE_VARIANT]

const backgrounds = {
  [DEFAULT_VARIANT]: colors => colors.grey.lighten45,
  [ACTIVE_VARIANT]: colors => colors.grey.darken30,
  [OUTLINE_VARIANT]: () => "transparent",
}

const foregrounds = {
  [DEFAULT_VARIANT]: colors => colors.grey.darken20,
  [ACTIVE_VARIANT]: colors => colors.grey.lighten55,
  [OUTLINE_VARIANT]: colors => colors.grey.darken20,
}

const borders = {
  [DEFAULT_VARIANT]: () => "transparent",
  [ACTIVE_VARIANT]: () => "transparent",
  [OUTLINE_VARIANT]: colors => colors.grey.base,
}

const Tag = styled(Text)`
  ${height}
  ${borderRadius}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => backgrounds[props.variant](props.theme.colors)};
  color: ${props => foregrounds[props.variant](props.theme.colors)};
  border: ${props => `1px solid ${borders[props.variant](props.theme.colors)}`};
`

Tag.propTypes = {
  /**
   * The variant style of the tag
   */
  variant: PropTypes.oneOf(ALL_VARIANTS),
}

Tag.defaultProps = {
  ...Text.defaultProps,
  variant: DEFAULT_VARIANT,
  height: "lg",
  borderRadius: "md",
  px: "md",
}

export default Tag
