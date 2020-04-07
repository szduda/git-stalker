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
      box-sizing: border-box;
    }

    a:hover {
      color: #fff;
    }

    button, input, ul, p {
      margin: 0 0 20px 0;
    }

    h1, h2, h3, h4 {
      margin: 0;
      font-size: 16px;
      line-height: 1.5;
      color: #000;
    }

    h1 {
      font-weight: 400;
      color: #808080;
      margin-bottom: 10px;
    }

    h2 {
      font-weight: 400;
      color: #444;
    }

    h3 {
      font-size: 20px;
      margin-bottom: 5px;
    }

    h4 {
      font-size: 16px;
    }

    button {
      background: #3A9DDB;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      color: #A9E0EB;
      width: 100%;
    }

    input {
      padding: 10px 20px;
      border: 1px solid #ededed;
      background: #f2f2f2;
      border-radius: 5px;
      width: 100%;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      margin: 0;
      padding: 0;
      display: block;
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
  width: 100%;
  justify-content: space-between;
  `} {...props} />
)