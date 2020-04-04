
import React from 'react'
/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'

const Styles = () => (
  <Global styles={css`
    body {
      background: #fff;
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
    }

    p, a, button, input {
      font-size: 16px;
      line-height: 1.4;
      font-weight: 400;
    }

    a:hover {
      color: #fff;
    }

    h1, h2, button, input, div, ul, p {
      margin: 0 0 20px 0;
    }

    h1, h2 {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 500;
      color: #444;
    }

    button {
      background: #3A9DDB;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      color: #A9E0EB;
    }

    input {
      padding: 10px 20px;
      border: 1px solid #ededed;
      background: #f2f2f2;
      border-radius: 5px;
    }
  `} />
)

export const AppWrapper = props => (
  <>
    <Styles />
    <div css={css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 1080px; 
      padding: 20px;
      margin: 0 auto;
    `} {...props} />
  </>
)

export const Row = props => (
  <div css={css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  `} {...props} />
)