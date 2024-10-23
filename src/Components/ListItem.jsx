import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const ListItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className={clsx("flex rounded-lg px-3 py-5", {
        normal:
          (item.status === "released" || item.status === "normal") &&
          item.level === "low",
        wanted: item.status === "wanted",
        arrested: item.status === "arrested",
        highRisk:
          (item.status === "released" || item.status === "normal") &&
          item.level === "high",
      })}
    >
      <img className="avatar" src={item.avatar} />
      <div className="ml-5 flex flex-grow justify-between gap-3 font-bold">
        <div>
          <p className="mb-2">Name: {item.name}</p>
          <p className="mb-2">Age: {item.age}</p>
          <p>Gender: {item.gender}</p>
        </div>
        <div>
          <p className="mb-2">Status: {item.status}</p>
          <p className="mb-2">Risk level: {item.level}</p>
        </div>
        <div className="flex flex-col">
          <button
            className="btn primary-btn mb-2"
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            Detail
          </button>
          <button
            className="btn secondary-btn"
            disabled={item.level === "high" && item.status === "released"}
          >
            Demote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
