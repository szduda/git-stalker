import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export default ({ term: initialTerm, onSearch }) => {
  const [term, setTerm] = useState(initialTerm)
  return (
    <div css={css`width: 100%;`}>
      <form>
        <input
          type="text"
          placeholder="Enter username"
          value={term}
          onChange={event => setTerm(event.target.value)}
        />
        <button
          type="submit"
          onClick={event => {
            event.preventDefault()
            onSearch(term)
          }}
        >
          Search
        </button>
      </form>
    </div>
  )
}