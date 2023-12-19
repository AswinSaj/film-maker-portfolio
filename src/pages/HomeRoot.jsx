import Navbar from "../components/Navbar/Navbar";

import LoadingScreen from "../pages/LoadingScreen/LoadingScreen";
import { Outlet } from "react-router-dom";
const HomeRoot = () => {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeRoot;
