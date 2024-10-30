import HomePage from "./Pages/HomePage";
import WatchListPage from "./Pages/WatchList";
import GeneralPage from "./Pages/GeneralPage";
import MainContent from "./Components/MainContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCrimes } from "./store/crime/crime.slice";
import { ToastContainer } from "./utility/toast";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrimes());
  }, [dispatch]);

  return (
    <SkeletonTheme baseColor="#8d8d8d" highlightColor="#a8a8a8">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="*" element={<HomePage />}>
            <Route index element={<MainContent />}></Route>
            <Route path="watchList" element={<WatchListPage />}></Route>
            <Route path="general" element={<GeneralPage />}></Route>
          </Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
