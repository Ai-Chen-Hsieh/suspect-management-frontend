import Nav from "../Components/Nav";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCrimes } from "../store/crime/crime.slice";
import { notify } from "../utility/toast";
import { editSuspect, getSuspect } from "../api/api";

const navList = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "Active Case",
  },
  {
    path: "/",
    name: "Close Case",
  },
];

const statusList = ["wanted", "arrested", "released", "normal"];

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [crime, setCrime] = useState({});
  const [status, setStatus] = useState("normal");
  const [statusOptions, setStatusOptions] = useState(statusList);

  const getStatusOptions = (currentStatus) => {
    console.log("currentStatus", currentStatus);
    switch (currentStatus) {
      case "normal":
        return ["normal", "wanted"];
      case "wanted":
        return ["wanted", "arrested"];
      case "arrested":
        return ["arrested", "released"];
      case "released":
        return ["released", "normal"];
      default:
        return statusList;
    }
  };

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  async function save() {
    try {
      const data = await editSuspect(id, crime);
      notify("Successfully Updated", "success");
      setCrime(data);
      setStatusOptions(getStatusOptions(data.status));
      dispatch(fetchCrimes());
    } catch (error) {
      notify("Failed to load crime data", "error");
      console.log("error", error);
    }
  }

  useEffect(() => {
    // 初始抓crime資料
    const fetchCrimeDetail = async () => {
      try {
        const result = await getSuspect(id);
        console.log("result", result);
        setCrime(result);
        setStatusOptions(getStatusOptions(result.status));
      } catch (error) {
        console.log("error", error);
      }
    };

    if (id) {
      fetchCrimeDetail();
    }
  }, [id]);

  return (
    <section>
      <Nav list={navList}></Nav>
      <h2 className="my-6 text-center text-2xl">Crime Detail</h2>
      <div className="mx-auto my-6 flex max-w-xl flex-col items-center justify-between bg-primary pb-6 pt-3">
        <img className="avatar mt-3" src={crime.avatar} alt="" />
        <div className="mb-4 mt-4 w-10/12 border-2 border-solid border-slate-400 py-3 text-center">
          <p className="mb-2 font-bold">Name: {crime.name}</p>
          <p className="mb-2 font-bold">Age: {crime.age}</p>
          <p className="mb-2 font-bold">Gender: {crime.gender}</p>
          <p className="mb-2 font-bold">
            <label>
              Status:
              <select
                name="status"
                value={status}
                onChange={handleStatusChange}
              >
                {statusOptions.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </p>
          <p className="mb-2 font-bold">
            Risk level: {crime.arrestCount >= 10 ? "High" : "Low"}
          </p>
          <p className="mb-2 font-bold">Arrest count: {crime.arrestedCount}</p>
        </div>
        <div className="flex w-10/12 justify-end">
          <button className="btn btn-primary mr-3" onClick={save}>
            save
          </button>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            back
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
