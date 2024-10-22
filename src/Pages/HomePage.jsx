import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const HomePage = () => {
  return (
    <>
      <Nav></Nav>
      <main className="my-6 mx-4">
        <Outlet />  
      </main>
    </>
  )
}

export default HomePage