import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { notify } from "../utility/toast";

const ListItem = ({ item }) => {
  const navigate = useNavigate();

  function handleClick() {
    notify("Demotion Successful !", "success");
    console.log("click", item.status);
  }

  return (
    <div
      className={clsx("flex flex-wrap rounded-lg px-3 py-5", {
        normal:
          (item.status === "released" || item.status === "normal") &&
          item.arrestedCount < 10,
        wanted: item.status === "wanted",
        arrested: item.status === "arrested",
        highRisk:
          (item.status === "released" || item.status === "normal") &&
          item.arrestedCount >= 10,
      })}
    >
      <img className="avatar" src={item.avatar} />
      <div className="ml-5 flex flex-grow flex-wrap justify-between gap-3 font-bold">
        <div>
          <p className="mb-2">Name: {item.name}</p>
          <p className="mb-2">Age: {item.age}</p>
          <p>Gender: {item.gender}</p>
        </div>
        <div>
          <p className="mb-2">Status: {item.status}</p>
          <p className="mb-2">
            Risk level: {item.arrestedCount >= 10 ? "Hight" : "Low"}
          </p>
        </div>
        <div className="flex flex-col">
          <button
            className="btn btn-primary mb-2"
            onClick={() => navigate(`/detail/${item._id}`)}
          >
            Detail
          </button>
          <button
            className="btn btn-secondary mb-2"
            disabled={
              item.status === "wanted" ||
              (item.status === "released" && item.arrestedCount >= 10) ||
              item.status === "arrested"
            }
            onClick={handleClick}
          >
            Demote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
