import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
export const Body = () => {
  //local state variable
  const [listOfRestaurant,setListOfRestaurant] = useState(resList);//array destructuring
  //const arr=useState(resList);const listOfRestaurant=arr[0];const setListOfRestaurant=arr[1];
  //normal js varia
  // let listOfRestaurant = [
  // {
  //   data: {
  //     id: "239435",
  //     name: "La Pino'z Pizza",
  //     cloudinaryImageId: "tolejbnae10pq0udbavn",
  //     cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //     avgRating: 4.2,
  //     deliveryTime: 45,
  //   },
  // },
  //   {
  //     data: {
  //       id: "239436",
  //       name: "Dominos",
  //       cloudinaryImageId: "tolejbnae10pq0udbavn",
  //       cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //       avgRating: 3,
  //       deliveryTime: 45,
  //     },
  //   },
  //   {
  //     data: {
  //       id: "239437",
  //       name: "mc deal",
  //       cloudinaryImageId: "tolejbnae10pq0udbavn",
  //       cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //       avgRating: 4.1,
  //       deliveryTime: 45,
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            // listOfRestaurant = listOfRestaurant.filter(
            //   (res) => res.data.avgRating > 4
            // );
            setListOfRestaurant(filteredList);
            console.log(listOfRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((ele) => (
          <RestaurantCard key={ele.info.id} resData={ele.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
