// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurnatMenu from "../utils/useRestaurnatMenu";
import ItemCategory from "./ItemCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resMenuInfo, setresMenuInfo] = useState(null);
  const {resId} = useParams();
  const resMenuInfo = useRestaurnatMenu(resId);
  const [showIndex,setShowIndex]=useState(0)
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     MENU_API+resId);
  //  const json = await data.json();
  //   console.log(json);
  //   setresMenuInfo(json);
  // };

  if (resMenuInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenuInfo?.data?.cards[2]?.card?.card?.info;
 
  const { itemCards } =
    resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]
      ?.card?.card;

  const categoryItem =
    resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("itemcardes with category", categoryItem);

  return (
    <div lassName="text-center">
      <h1 className="font-bold text-xl m-2 ">{name}</h1>
      <h3 className="p2 text-s">
        {cuisines.join(",")}-{costForTwoMessage}
      </h3>
      <ul>
        {categoryItem &&
          categoryItem.map((item,index) => (
            <ItemCategory
              data={item?.card?.card}
              key={item?.card?.card?.id}
              showItemList={index===showIndex?true:false}
              setShowIndex={()=>setShowIndex(index)}
            />
          ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
