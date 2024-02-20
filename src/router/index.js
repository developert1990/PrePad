import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { CreatePage } from "../pages/CreatePage";
import { EditPage } from "../pages/EditPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrePadNavigation } from "../components/PrePadNavigation";

export const PrePadRouter = () => {
  return (
    <BrowserRouter>
      <PrePadNavigation />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/edit" element={<EditPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
