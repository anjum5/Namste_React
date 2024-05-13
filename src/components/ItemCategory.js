import { useState } from "react";
import ItemList from "./ItemList";

const ItemCategory = ({ data ,showItemList,setShowIndex}) => {
  //   console.log("data in ItemCategory", data);

//   const [showItemList, setItemList] = useState(false);
  const handleClick = () => {
    // setItemList(!showItemList);
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-pink-30 shadow-xl m-auto my-5 py-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-s font-bold mx-4">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span className="mx-4">🔽</span>
        </div>

        {showItemList && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default ItemCategory;
