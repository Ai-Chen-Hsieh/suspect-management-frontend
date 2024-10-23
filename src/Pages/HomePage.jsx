import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const HomePage = () => {
  const mainNavList = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/watchList",
      name: "WatchList",
    },
    {
      path: "/general",
      name: "General",
    },
  ];
  return (
    <>
      <Nav list={mainNavList}></Nav>
      <main className="mx-4 my-6">
        <Outlet />
      </main>
    </>
  );
};

export default HomePage;
