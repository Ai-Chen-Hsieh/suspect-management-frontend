import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notify } from "../utility/toast";
import { editSuspect } from "../api/api/api";
import { fetchCrimes } from "../store/crime/crime.slice";

const ListItem = ({ item, isGeneral }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleClick(message) {
    try {
      await editSuspect(item._id, {
        ...item,
        priority: !item.priority,
      });
      notify(`${message} Successful !`, "success");
      dispatch(fetchCrimes());
    } catch (error) {
      notify("Failed to load crime data", "error");
      console.log("error", error);
    }
  }

  const renderButton = () => {
    if (isGeneral) {
      return (
        <button
          className="btn btn-primary mb-2"
          onClick={() => handleClick("Promote")}
        >
          Promote
        </button>
      );
    } else {
      const isDisabled =
        item.status === "wanted" ||
        (item.status === "released" && item.arrestedCount >= 10) ||
        item.status === "arrested";

      return (
        <button
          className="btn btn-secondary mb-2"
          disabled={isDisabled}
          onClick={() => handleClick("Demote")}
        >
          Demote
        </button>
      );
    }
  };

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
          {renderButton()}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
