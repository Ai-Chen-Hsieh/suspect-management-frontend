const Card = ({ person }) => {
  return (
    <div className="card">
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
