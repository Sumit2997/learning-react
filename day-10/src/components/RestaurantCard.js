import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData;
  return (
    <div
      className={
        "res-card m-4 p-4 w-[250px] h-[100%] rounded-lg bg-slate-100 hover:bg-gray-300"
      }
    >
      <img
        className={"res-logo w-[100%] h-32 rounded-lg"}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg overflow-hidden whitespace-nowrap text-ellipsis">
        {name}
      </h3>
      <h4 className="overflow-hidden whitespace-nowrap text-ellipsis">
        {cuisines.join(", ")}
      </h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
//Higher order Components
//input - RestaurantCard==>RestaurantIsOpen
export const restaurantIsOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Opened</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
