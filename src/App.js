import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantsMenu";
// import Grocery from "./components/Grocery";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";
import Cart from "./components/Cart";
// import Shimmer from "./components/Shimmer";

// Header
//  -logo
//  -NavItems

//body
//   -search
//   -restaurantContainer
//       -restaurantCard
//           -name of resto,rating ,cusines,ETA

//footer
//   -copyright
//   -links
//   -address
//   -contacts
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [useName, setUserName] = useState();

  //authonitication code
  useEffect(() => {
    const data = {
      Name: "Anjum",
    };
    setUserName(data.Name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: useName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading....</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
