import List from "../Components/List";
import ListItem from "../Components/ListItem";

const GeneralPage = () => {
  const list = [
    {
      id: 1,
      priority: true,
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
      priority: true,
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
      priority: true,
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
      priority: false,
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
      priority: false,
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
  const filteredList = list.filter((item) => !item.priority);
  return (
    <section className="mx-auto w-5/12">
      <h2 className="mb-4 text-center text-2xl">General list</h2>
      <List>
        {filteredList.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </List>
    </section>
  );
};

export default GeneralPage;
