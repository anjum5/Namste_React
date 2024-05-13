import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
// import appStore from "./Redux/appStore";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Redux/appStore";
import "@testing-library/jest-dom"

test("should have login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button=screen.getByRole("button",{name:"Log In"})
  expect(button).toBeInTheDocument()
});

test("should have login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const button=screen.getByRole("button",{name:"Log In"})
    fireEvent.click(button)
    const LogOutbutton=screen.getByRole("button",{name:"Log Out"})
    expect(LogOutbutton).toBeInTheDocument()
  });
  

  
test("should have cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
  const Cart=screen.getByText("Cart ( 0 items)")
  expect(Cart).toBeInTheDocument()
  });
  test("should have cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
  const CartItem=screen.getByText(/Cart/)
  expect(CartItem).toBeInTheDocument()
  });
