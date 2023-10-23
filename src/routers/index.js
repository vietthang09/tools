import { Route, Routes } from "react-router-dom";
import Tiktok from "../pages/TikTok";
import Youtube from "../pages/Youtube";
import Instagram from "../pages/Instagram";
import Facebook from "../pages/Facebook";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Tiktok />} />
      <Route path="/youtube" element={<Youtube />} />
      <Route path="/instagram" element={<Instagram />} />
      <Route path="/facebook" element={<Facebook />} />
    </Routes>
  );
};
