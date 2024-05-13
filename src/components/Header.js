import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Log In");

  const {loggedInUser} = useContext(UserContext);

  console.log("usecontect data", loggedInUser);
  const onlineStatus = useOnlineStatus();

  const cartItems=useSelector((store)=>store.cart.items)
  console.log("cartItems",cartItems);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className=" flex items-center">
        <ul className="flex ">
          <li className="m-2 p-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-2 p-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="m-2 p-2">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="m-2 p-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>

          <li className="m-2 p-2">
            Online Status:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="m-2 p-2">
          <Link to={"/cart"}>  Cart ( {cartItems.length} items)</Link>
          </li>
          <li className="m-2 p-2">
            <button
              className="btn-login"
              onClick={() =>
                btnLogin === "Log In"
                  ? setbtnLogin("Log Out")
                  : setbtnLogin("Log In")
              }
            >
              {btnLogin}
            </button>
          </li>
          <li className="m-2 p-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
