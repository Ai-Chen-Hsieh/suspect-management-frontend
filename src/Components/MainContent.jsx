import Container from "./Container";
import Card from "./Card";
const MainContent = () => {
  const contentList = [
    {
      title: "Wanted",
      quantity: 1,
      people: [
        {
          userId: 10,
          name: "John Doe",
          age: 20,
          gender: "male",
          avatar:
            "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
        },
        {
          userId: 11,
          name: "Jane Doe",
          age: 30,
          gender: "female",
          avatar:
            "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
        },
      ],
      id: 1,
    },
    {
      title: "High-Risk Individual",
      quantity: 2,
      people: [
        {
          userId: 12,
          name: "May",
          age: 25,
          gender: "female",
          avatar:
            "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
        },
        {
          userId: 78,
          name: "Doe",
          gender: "male",
          age: 30,
          avatar:
            "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
        },
        {
          userId: 13,
          name: "May",
          age: 25,
          gender: "female",
          avatar:
            "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
        },
        {
          userId: 79,
          name: "Doe",
          gender: "male",
          age: 30,
          avatar:
            "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
        },
      ],
      id: 2,
    },
    {
      title: "Released from Custody",
      people: [
        {
          userId: 20,
          name: "Mike",
          gender: "male",
          age: 50,
          avatar:
            "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
        },
        {
          userId: 11,
          name: "Frank",
          gender: "male",
          age: 38,
          avatar:
            "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
        },
      ],
      quantity: 4,
      id: 3,
    },
    {
      title: "Arrested",
      quantity: 3,
      people: [
        {
          userId: 18,
          name: "Johnny",
          age: 30,
          gender: "male",
          avatar:
            "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
        },
        {
          userId: 40,
          name: "Johnny",
          age: 35,
          gender: "male",
          avatar:
            "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA",
        },
      ],
      id: 4,
    },
  ];

  return (
    <main className="max-w-11/12 mx-auto my-6 flex flex-wrap justify-between">
      {contentList.map((content) => (
        <Container key={content.id} content={content}>
          {content.people.map((person) => (
            <Card key={person.userId} person={person} />
          ))}
        </Container>
      ))}
    </main>
  );
};

export default MainContent;
