import React from "react"
import ReactDOM from "react-dom"
import Homepage from "../../pages/index"
import {render, screen} from '@testing-library/react'



describe("Example", () => {
  it("Checks 'Hey there!' text", () => {
    render(<Homepage />)
    expect(screen.getByText("Hey there!")).toBeTruthy();
  }) 
})