import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"
test("should render conatch page", () => {
  render(<Contact />);
  const heading=screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should have 2input boxes conatch page", () => {
    render(<Contact />);
    const Inputbox=screen.getAllByRole("textbox")
    // console.log(Inputbox)
    expect(Inputbox.length).toBe(2)
  });

  test("should have button",()=>{
    render(<Contact />);
    const button=screen.getByRole("button")
    expect(button).toBeInTheDocument();
  })