import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import FetchedListWrapper from '../FetchedListWrapper'

let container, getWrapper

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)

  getWrapper = () => document.getElementById("FetchedListWrapper")
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe("ReposList", () => {

  test("renders component", () => {
    renderComponent()
    const wrapper = getWrapper()
    expect(wrapper).toBeTruthy()
  })

  test("renders null if invisible", () => {
    renderComponent({ visible: false })
    const wrapper = getWrapper()
    expect(wrapper).toBeFalsy()
  })

  test("renders message if has no data", () => {
    renderComponent({ hasData: false })
    const msg = document.querySelector('.noDataMessage')
    expect(msg.innerHTML).toMatch("noDataMessage")
  })

  test("renders spinner if loading and has data", () => {
    renderComponent({ loading: true, hasData: true })
    const wrapper = getWrapper()
    expect(wrapper.innerHTML).toMatch("loading")
  })

  test("renders spinner if loading and has no data", () => {
    renderComponent({ loading: true, hasData: false })
    const wrapper = getWrapper()
    expect(wrapper.innerHTML).toMatch("loading")
  })
})

const renderComponent = props => render(
  <FetchedListWrapper
    visible={true}
    loading={false}
    hasData={true}
    noDataMessage={'noDataMessage'}
    id={"FetchedListWrapper"}
    loadingIndicator={"loading"}
    {...props}
  >
    <ul />
  </FetchedListWrapper>,
  container
)