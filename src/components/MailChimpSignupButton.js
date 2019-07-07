import React from 'react'
import styled from '@emotion/styled'

const LinkButton = styled.button`
  background-color: transparent;
  border: none;
  color: #0071bc;
  cursor: pointer;
  text-decoration: underline;
  display: inline;
  margin: 0;
  padding: 0;
`

function openMailChimpSignup() {
  // By default, the popup will not show if user has closed it before
  // Overriding these MC cookies allows the popup to show again
  // Alternatively, you could use MCPopupSubscribed to hide your button
  document.cookie =
    'MCPopupClosed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'
  document.cookie =
    'MCPopupSubscribed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'

  // Call the singup form script, triggering "immediate" display
  window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
    L.start({
      baseUrl: process.env.GATSBY_MAILCHIMP_POPUP_BASE_URL,
      uuid: process.env.GATSBY_MAILCHIMP_POPUP_UUID,
      lid: process.env.GATSBY_MAILCHIMP_POPUP_LID,
      uniqueMethods: true,
    })
  })
}

function MailChimpSignupButton(props) {
  return <LinkButton onClick={openMailChimpSignup}>{props.cta}</LinkButton>
}

export default MailChimpSignupButton
