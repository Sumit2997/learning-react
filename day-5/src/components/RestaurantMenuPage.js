import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  //   let resId = 166514;
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      {/* <p>{cuisines.join(",")}-{costForTwoMessage}</p> */}
      <h2>Menu</h2>
      <ul>
        {itemCards.map((el) => (
          <li key={el.card.info.id}>
            {el.card.info.name} - {el.card.info.price / 100}Rs.
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
