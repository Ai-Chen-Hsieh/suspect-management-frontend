import HomePage from "./Pages/HomePage";
import WatchListPage from "./Pages/WatchList";
import GeneralPage from "./Pages/GeneralPage";
import MainContent from "./Components/MainContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomePage />}>
          <Route index element={<MainContent />}></Route>
          <Route path="watchList" element={<WatchListPage />}></Route>
          <Route path="general" element={<GeneralPage />}></Route>
        </Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
