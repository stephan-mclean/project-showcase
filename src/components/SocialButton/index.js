import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  font-size: 2rem;
  border: 1px solid transparent;
  cursor: pointer;
  border-color: ${props => props.theme.colors.grey.base};
  color: ${props => props.theme.colors.grey.base};
  transition: ${props => `all ${props.theme.transitionSpeed}`};

  :hover {
    border-color: ${props => props.theme.colors.grey.darken20};
    color: ${props => props.theme.colors.grey.darken20};
  }
`

const SocialButton = ({ iconPrefix, icon, ...rest }) => (
  <Container {...rest}>
    <FontAwesomeIcon icon={[iconPrefix, icon]} />
  </Container>
)

SocialButton.propTypes = {
  /**
   * The icon to display
   */
  icon: PropTypes.string,
  /**
   * Font awesome prefix for the icon
   */
  iconPrefix: PropTypes.string,
}

SocialButton.defaultProps = {
  icon: "github",
  iconPrefix: "fab",
}

export default SocialButton
