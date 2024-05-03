import { Menu } from "../utils/models";

const Card = (props: { menu: Menu; handleClick?: () => void }) => {
  return props.handleClick ? (
    <li className="p-4 my-2 flex justify-between items-center text-wrap text-left bg-slate-700 rounded-lg">
      <span className="w-3/4 text-balance">{props.menu.name}</span>
      <button onClick={props.handleClick}>Elegir</button>
    </li>
  ) : (
    <li className="p-4 my-2 flex justify-between items-center text-wrap text-left bg-slate-700 rounded-lg">
      <span className="text-balance">{props.menu.name}</span>
    </li>
  );
};

export default Card;
