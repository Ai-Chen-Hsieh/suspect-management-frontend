const ListItem = ({ item }) => {
  return (
    <div className="flex rounded-lg bg-[#ebebeb] px-3 py-5">
      <img className="avatar" src={item.avatar} />
      <div className="ml-5 flex flex-grow justify-between gap-3 font-bold">
        <div>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <p>Gender: {item.gender}</p>
        </div>
        <div>
          <p>Status: {item.status}</p>
          <p>Risk level: {item.level}</p>
        </div>
        <div className="flex flex-col">
          <button className="btn primary-btn">Detail</button>
          <button className="btn secondary-btn mt-1">Demote</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
