import List from "../Components/List";
import ListItem from "../Components/ListItem";
const WatchListPage = () => {
  const list = [
    {
      id: 1,
      name: "Sneakers",
      age: 20,
      gender: "male",
      status: "arrested",
      level: "high",
      arrestCount: 10,
      avatar:
        "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
    },
    {
      id: 2,
      name: "lemon",
      age: 25,
      gender: "female",
      status: "wanted",
      level: "high",
      arrestCount: 10,
      avatar:
        "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
    },
    {
      id: 3,
      name: "water",
      age: 45,
      gender: "man",
      status: "released",
      level: "low",
      arrestCount: 5,
      avatar:
        "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
    },
    {
      id: 4,
      name: "waterman",
      age: 45,
      gender: "man",
      status: "normal",
      level: "high",
      arrestCount: 5,
      avatar:
        "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
    },
    {
      id: 4,
      name: "waterman",
      age: 45,
      gender: "man",
      status: "released",
      level: "high",
      arrestCount: 5,
      avatar:
        "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
    },
  ];
  return (
    <section className="mx-auto w-5/12">
      <h2 className="mb-4 text-center text-2xl">Priority Watchlist</h2>
      <List>
        {list.map((item) => (
          <ListItem key={item.id} item={item}></ListItem>
        ))}
      </List>
    </section>
  );
};

export default WatchListPage;
