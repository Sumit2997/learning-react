import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
export const Body = () => {
  //local state variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]); //array destructuring
  //const arr=useState(resList);const listOfRestaurant=arr[0];const setListOfRestaurant=arr[1];
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  //whenever state variable update ,react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");
  useEffect(() => {
    // console.log("use effect call");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2457963&lng=75.8420716&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    //optional chaining
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering
  // if(listOfRestaurant.length===0){
  //   return (<Shimer/>);
  // }
  return listOfRestaurant.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (filteredRes.length === 0)
                setFilteredRestaurant(listOfRestaurant);
              else setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((ele) => (
          <RestaurantCard key={ele.info.id} resData={ele.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
