import RestaurantsCard, { withPromotedLable } from "./RestaurantsCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [res, setres] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [FilterRes, setFilterRes] = useState([]);

  const RestaurnatPromted = withPromotedLable(RestaurantsCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6856758&lng=73.8300133&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("data is", res);
    console.log(json);
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h2>You are offline </h2>;

  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-2 p-2">
          <input
            type="text"
            data-testid="searchID"
            placeholder="Search"
            className="border-2 border-neutral-200 rounded-lg px-1"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className=" m-2 px-4 border-2 bg-pink-300"
            onClick={() => {
              const filterSearch = res.filter((resturant) =>
                resturant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterRes(filterSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="my-5 mx-1 px-2 border-2 bg-pink-300 h-8 "
          onClick={() => {
            const filterList = res.filter((res) => res.info.avgRating >= 5);
            console.log("top rated");
            setres(filterList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap">
        {FilterRes.map((resturant) => 
        //  console.log("header",resturant.info.aggregatedDiscountInfoV3)
        (
          
          <Link
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            {resturant?.info?.aggregatedDiscountInfoV3?.subHeader ? <RestaurnatPromted resData={resturant} /> 
             :<RestaurantsCard  resData={resturant}/>
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
