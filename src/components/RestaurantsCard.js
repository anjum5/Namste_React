import { CDN_URL } from "../utils/constants";

const RestaurantsCard = (props) => {
  const { resData } = props;
  // console.log("resdata",resData)

  const { name, cuisines, avgRating, costForTwo, sla } = resData.info;

  return (
    <div
      className="m-4 p-4 w-[250px] h-[400px]"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="h-[200px] w-[230px]"
        style={{ backgroundColor: "#f0f0f0" }}
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h4 className=" font-bold my-2">{name}</h4>
      <h5>{cuisines.join(" ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

export const withPromotedLable = (RestaurantsCard) => {
  return (props) => {
    return (
      <div data-testid="resCard">
        <label className=" absolute m-1 p-1 bg-black text-white rounded-lg">
          {props.resData.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantsCard {...props} />
      </div>
    );
  };
};
export default RestaurantsCard;
