import Nav from "../Components/Nav";

const DetailPage = () => {
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
  return (
    <section>
      <Nav list={navList}></Nav>
      <h1>Detail Page</h1>
    </section>
  );
};

export default DetailPage;
