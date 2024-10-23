import Nav from "../Components/Nav";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
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

  const crime = {
    id: 1,
    name: "Sneakers",
    age: 20,
    gender: "male",
    status: "arrested",
    level: "high",
    arrestCount: 10,
    avatar:
      "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
  };
  return (
    <section>
      <Nav list={navList}></Nav>
      <h2 className="my-6 text-center text-2xl">Crime Detail</h2>
      <div className="bg-primary mx-auto my-6 flex max-w-xl flex-col items-center justify-between pb-6 pt-3">
        <img className="avatar mt-3" src={crime.avatar} alt="" />
        <div className="mb-4 mt-4 w-10/12 border-2 border-solid border-slate-400 py-3 text-center">
          <p className="mb-2 font-bold">Name: {crime.name}</p>
          <p className="mb-2 font-bold">Age: {crime.age}</p>
          <p className="mb-2 font-bold">Gender: {crime.gender}</p>
          <p className="mb-2 font-bold">
            <label>
              Status:
              <select name="status" defaultValue={crime.status}>
                <option value="wanted">wanted</option>
                <option value="arrest">arrested</option>
                <option value="released">released</option>
                <option value="normal">normal</option>
              </select>
            </label>
          </p>
          <p className="mb-2 font-bold">Risk level: {crime.level}</p>
          <p className="mb-2 font-bold">Arrest count: {crime.arrestCount}</p>
        </div>
        <div className="flex w-10/12 justify-end">
          <button className="btn btn-primary mr-3">save</button>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            back
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
