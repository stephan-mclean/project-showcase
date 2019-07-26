import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import SocialButton from "./index"

storiesOf("Components", module).add("Social Button", () => (
  <SocialButton icon={text("Icon")} iconPrefix={text("Icon Prefix")} />
))
