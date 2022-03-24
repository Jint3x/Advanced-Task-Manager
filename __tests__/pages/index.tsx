import React from "react"
import { Introduction, Description, RenderBlockText, RenderLine } from "../../pages/index"
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


describe("Tests the <Description> Component", () => {
  it("Renders correctly", () => {
    const tree = renderer
    .create(<Description />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  })


  it("Renders a line with the correct row number", () => {
    const exampleText = "example-text";
    const { container } = render(<RenderLine row={exampleText} />);

    let renderedDiv = container.querySelector<HTMLDivElement>("div");

    expect(renderedDiv.classList).toContain(exampleText);
  })


  it("Renders component with the passed background color & text", () => {
    const text = "This is an example component";
    const bg = "bg-primary-green";
    const exampleText = "example-text";

    render(
    <RenderBlockText 
      bgColor={bg}
      text={text}
      row={exampleText} 
    />
    );

    let textParagraph = screen.getByText<HTMLParagraphElement>(text);

    expect(textParagraph.textContent).toBe(text);
    expect(textParagraph.nodeName).toBe("P");
    expect(textParagraph.parentElement.classList).toContain(bg);
    expect(textParagraph.parentElement.classList).toContain(exampleText);
  })
})