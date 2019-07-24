import React from "react"
import { storiesOf } from "@storybook/react"
import styled from "@emotion/styled"
import { color, layout } from "styled-system"

const Color = styled.div`
  ${color}
  ${layout}
`

storiesOf("Design", module).add("Colors", () => (
  <div>
    <Color bg="grey.lighten45" height="2rem" />
    <Color bg="grey.lighten55" height="2rem" />
    <Color bg="grey.base" height="2rem" />
    <Color bg="grey.darken20" height="2rem" />
    <Color bg="grey.darken30" height="2rem" />
  </div>
))
