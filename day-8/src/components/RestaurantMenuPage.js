import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimer />;
  const { name } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
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
