import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../Redux/cartSlice";

const ItemList = ({ items }) => {
  console.log("iteamlist", items);

  const dispatch=useDispatch()

  const handleAddItem=(item)=>{
    dispatch(addItem(item))
    console.log("items in handleadd",item)
    
  }
  return (
    <div>
      {items.map((item) => (
        <div className="m-2 p-2 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-s">{item?.card?.info?.name} - </span>
              <span className="text-s">
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 ">
            <div className="absolute text-center">
              <button className="bg-pink-500 m-2 px-3 mb-32 text-black rounded" onClick={()=>handleAddItem(item)}>
                ADD +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
