import GeneralButton from "../../components/GeneralButton";
import { screen, render } from "@testing-library/react";
import renderer from 'react-test-renderer';

describe("Tests component: <GeneralButton />", () => {
  it("Calls a function that is passed down to the button", () => {
    let text = "Click me!";
    let customClasses = "";
    let clickFunction = jest.fn(() => null);

    render(
      <GeneralButton 
       text={text}
       customClasses={customClasses}
       clickFunction={clickFunction}
      />
    )

    let btn = screen.getByText(text);
    btn.click();

    expect(clickFunction.mock.calls.length).toBe(1);
  })


  it("Applies the provided classes to the button & verifies that the element is a button", () => {
    let text = "Click me!";
    let customClasses = "class1 class2 class3";
    let clickFunction = jest.fn(() => null);

    render(
      <GeneralButton 
       text={text}
       customClasses={customClasses}
       clickFunction={clickFunction}
      />
    )

    let btn = screen.getByText(text);
    let btnClasses = Object.values(btn.classList);
    let appliedClasses = customClasses.split(" ");

    for (let appliedClass of appliedClasses) {
      expect(btnClasses).toContain(appliedClass);
    };

    expect(btn.nodeName).toBe("BUTTON")
  })


  it("Takes a snapshot of the button", () => {
    let text = "Click me!";
    let customClasses = "class1 class2 class3";
    let clickFunction = jest.fn(() => null);

    const tree = renderer
    .create(
      <GeneralButton 
       text={text}
       customClasses={customClasses}
       clickFunction={clickFunction}
      />
    )
    .toJSON();

    expect(tree).toMatchSnapshot()
  })
})