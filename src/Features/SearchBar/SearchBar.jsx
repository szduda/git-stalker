import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export default () => (
  <div css={css`width: 100%;`}>
    <form>
      <input type="text" placeholder="Enter username" />
      <button type="submit">Search</button>
    </form>
  </div>
)