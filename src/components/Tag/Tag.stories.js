import React from "react"
import { storiesOf } from "@storybook/react"
import { select, text } from "@storybook/addon-knobs"

import Tag, { ALL_VARIANTS } from "./index"

storiesOf("Components", module).add("Tag", () => (
  <Tag variant={select("Variant", ALL_VARIANTS)}>{text("Text", "Text")}</Tag>
))
