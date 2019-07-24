import styled from "@emotion/styled"
import { typography, space, color, display } from "styled-system"

export const Text = styled.div`
  ${typography}
  ${space}
  ${color}
  ${display}
`

Text.defaultProps = {
  lineHeight: 0,
  mb: "3rem",
  fontWeight: "normal",
  fontFamily: "primary",
  color: "grey.darken20",
  display: "inline-block",
}

export const H1 = Text.withComponent("h1")
H1.defaultProps = {
  ...Text.defaultProps,
  fontWeight: "headings",
  fontSize: "xxxxxl",
  display: "block",
}

export const H2 = Text.withComponent("h2")
H2.defaultProps = {
  ...H1.defaultProps,
  fontSize: "xxxxl",
}

export const H3 = Text.withComponent("h3")
H3.defaultProps = {
  ...H1.defaultProps,
  fontSize: "xxxl",
}

export const H4 = Text.withComponent("h4")
H4.defaultProps = {
  ...H1.defaultProps,
  fontSize: "xxl",
}

export const H5 = Text.withComponent("h5")
H5.defaultProps = {
  ...H1.defaultProps,
  fontSize: "xl",
}

export const H6 = Text.withComponent("h6")
H6.defaultProps = {
  ...H1.defaultProps,
  fontSize: "lg",
}

export const P = Text.withComponent("p")
P.defaultProps = {
  ...Text.defaultProps,
  fontSize: "md",
  display: "block",
}
