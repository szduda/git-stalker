import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import SearchBar from '../SearchBar'

let container, getWrapper, getButton, getInput, searchMock

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)

  searchMock = jest.fn()
  getWrapper = () => document.getElementById("SearchBar")
  getButton = () => document.querySelector("button")
  getInput = () => document.querySelector("input")
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe("SearchBar", () => {

  test("renders component", () => {
    renderComponent()
    const wrapper = getWrapper()
    const input = getInput()
    const button = getButton()
    expect(wrapper).toBeTruthy()
    expect(input).toBeTruthy()
    expect(button).toBeTruthy()
  })

  test("does not call search if input is empty", () => {
    renderComponent()
    const input = getInput()
    act(() => {
      input.value = ""
    })

    const button = getButton()
    button.click()

    expect(searchMock).toHaveBeenCalledTimes(0)
  })

  test("does call search if input is not empty", () => {
    renderComponent()
    const input = getInput()
    act(() => {
      input.value = "term"
    })

    const button = getButton()
    button.click()

    expect(searchMock).toHaveBeenCalledTimes(1)
    expect(searchMock).toBeCalledWith("term")
  })
})

const renderComponent = () => render(
  <SearchBar search={searchMock} id="SearchBar" />,
  container
)