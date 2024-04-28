import { Menu } from "../utils/models";

const Card = ({ menu }: { menu: Menu }) => {
  return (
    <li className="p-4 my-2 flex justify-between items-center text-wrap text-left bg-slate-700 rounded-lg">
      <span className="w-3/4 text-balance">{menu.name}</span>
      <button>Elegir</button>
    </li>
  );
};

export default Card;
