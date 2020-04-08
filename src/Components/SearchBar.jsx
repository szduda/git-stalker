import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export default ({ search, ...rest }) => {
  let input

  const submit = event => {
    event.preventDefault()
    const term = input.value

    if (!term.trim()) {
      return
    }

    search(term)
  }

  return (
    <div css={css`width: 100%;`} {...rest}>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter username"
          ref={node => input = node}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  )
}