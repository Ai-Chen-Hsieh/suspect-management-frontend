import { useNavigate } from "react-router-dom";
const Card = ({ person }) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/detail/${person.id}`)}>
      <img src={person.avatar} alt="" className="avatar" />
      <div className="ml-4 flex-grow">
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Gender: {person.gender}</p>
      </div>
    </div>
  );
};

export default Card;
