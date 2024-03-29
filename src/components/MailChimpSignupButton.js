import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Loader from 'react-loading-overlay'

const LinkButton = styled.button`
  color: #0071bc;
  cursor: pointer;
  text-decoration: underline;
  display: inline;
`

const isMCForm = /(PopupSignupForm)\w+/

function mojoStartFn(L) {
  L.start({
    baseUrl: process.env.GATSBY_MAILCHIMP_POPUP_BASE_URL,
    uuid: process.env.GATSBY_MAILCHIMP_POPUP_UUID,
    lid: process.env.GATSBY_MAILCHIMP_POPUP_LID,
    uniqueMethods: true,
  })
}

function openMailChimpSignup() {
  // By default, the popup will not show if user has closed it before
  // Overriding these MC cookies allows the popup to show again
  // Alternatively, you could use MCPopupSubscribed to hide your button
  document.cookie =
    'MCPopupClosed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'
  document.cookie =
    'MCPopupSubscribed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'

  // Call the singup form script, triggering "immediate" display
  window.dojoRequire(['mojo/signup-forms/Loader'], mojoStartFn)
}

const observerCallback = (setShowLoader) => (mutationsList, observer) => {
  console.log(mutationsList)
  const addedNode = mutationsList[0] ? mutationsList[0].addedNodes[0] : false
  // Verify the added node matches the MC form id pattern
  // Remove the loading overlay
  if (addedNode && isMCForm.test(addedNode.id)) {
    setShowLoader(false)
    observer.disconnect()
  }
}

function MailChimpSignupButton(props) {
  const [showLoader, setShowLoader] = useState(false)
  let observer
  let body

  useEffect(() => {
    body = document.getElementsByTagName('body')
  })
  useEffect(() => {
    observer = new MutationObserver(observerCallback(setShowLoader))
  })

  function showForm() {
    setShowLoader(true)
    openMailChimpSignup()
    // Start observing the body element for dom changes
    observer.observe(body[0], { childList: true })
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <Loader
        active={showLoader}
        spinner
        fadeSpeed={0}
        styles={{
          overlay: (base) => ({
            ...base,
            position: 'fixed',
            background: 'rgba(0, 0, 0, 0.2)',
          }),
        }}
      >
        <LinkButton onClick={showForm}>{props.cta}</LinkButton>
      </Loader>
    </div>
  )
}

export default MailChimpSignupButton
