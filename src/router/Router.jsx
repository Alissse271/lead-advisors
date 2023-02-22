import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import { MainPage } from "../components";

export const Router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<MainPage />}></Route>),
  { basename: "/lead-advisors" },
);
