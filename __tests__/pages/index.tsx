import React from "react"
import { Introduction } from "../../pages/index"
import {render, screen} from '@testing-library/react'
import renderer from 'react-test-renderer';


const domain = "http://localhost";

describe("Tests the <Introduction> Component", () => {
  it("Takes and matches a snapshot", () => {
    const tree = renderer
    .create(<Introduction />)
    .toJSON()

    expect(tree).toMatchSnapshot();
  })


  it("Validates the buttons", () => {
    render(<Introduction />)

    let visitAppButton = screen.getByText<HTMLAnchorElement>("Get Started");
    let docsButton = screen.getByText<HTMLAnchorElement>("Read the docs");

    expect(visitAppButton.parentElement.nodeName).toBe("BUTTON");
    expect(visitAppButton.nodeName).toBe("A");
    expect(visitAppButton.href).toBe(domain + "/atm/");

    expect(docsButton.parentElement.nodeName).toBe("BUTTON");
    expect(docsButton.nodeName).toBe("A");
    expect(docsButton.href).toBe(domain + "/docs/");
  }) 
})